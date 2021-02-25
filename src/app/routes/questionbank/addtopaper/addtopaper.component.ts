import { Component, OnInit, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';
import { PaperService } from '../../../shared/service/paper.service';
import { com, JsUtils } from '@shared';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { STChange, STColumn, STComponent, STData } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { QuestionBankService } from '../../../shared/service/question-bank.service';
import Paper = com.xueershangda.tianxun.classroom.model.Paper;
import PaperReply = com.xueershangda.tianxun.classroom.model.PaperReply;
import QuestionBank = com.xueershangda.tianxun.classroom.model.QuestionBank;
import QuestionBankReply = com.xueershangda.tianxun.classroom.model.QuestionBankReply;

@Component({
  selector: 'app-questionbank-addtopaper',
  templateUrl: './addtopaper.component.html',
})
export class QuestionbankAddtopaperComponent implements OnInit {
  title = '选择题目';
  i: any;

  url: STData[] = [];
  searchSchema: SFSchema = {
    properties: {
      id: {
        type: 'string',
        title: '编号'
      },
      title: {
        type: 'string',
        title: '题目'
      }
    }
  };
  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'id', type: 'checkbox' },
    { title: '题目', index: 'title' },
    { title: '题目类型', index: 'type', type: 'enum', enum: { 1: '选择题', 2: '填空题', 3: '解答题' }},
    { title: '更新时间', index: 'updateDate', type: 'date' }
  ];

  constructor(
    private modal: NzModalRef,
    public msgSrv: NzMessageService, private questionBankService: QuestionBankService,
    public http: _HttpClient, private paperService: PaperService
  ) { }

  ngOnInit(): void {
    sessionStorage.removeItem('$selectedQuestionBank');
    if (this.i.id && JsUtils.isNotBlank(this.i.id)) {
      this.paperService.get(this.i.id as string).subscribe(result => {
        const uint8Array = new Uint8Array(result, 0, result.byteLength);
        const reply = PaperReply.decode(uint8Array);
        if (reply.code === 1) {
          this.i = reply.data[0];
        } else {
          this.i = new Paper();
          this.msgSrv.success(reply.message);
        }
      });

      const questionBank = new QuestionBank();
      questionBank.pageSize = 20;
      // questionBank.subjectId = this.i.subjectId;
      // questionBank.gradeId = this.i.gradeId;
      this.questionBankService.list(questionBank).subscribe(result => {
        const uint8Array = new Uint8Array(result, 0, result.byteLength);
        const reply = QuestionBankReply.decode(uint8Array);
        if (reply.code === 1) {
          this.url = reply.data;
          // TODO 将试卷中已有的题目添加到sessionStorage中
          for (const item of this.url) {

          }
        } else {
          this.msgSrv.success(reply.message);
        }
      });
    } else { // id不可能为空
      this.msgSrv.success('试卷id不能为空。');
    }
  }

  // 当有行被选中或取消时，会将改行的信息传递过来
  change(event: STChange) {
    if (event.type === 'checkbox') {
      const checkboxes = event.checkbox;
      let selectedQuestionBank = sessionStorage.getItem('$selectedQuestionBank');
      if (selectedQuestionBank === null) {
        selectedQuestionBank = '';
      }
      for (const item of checkboxes) { // 每次会迭代所有的
        const id = item.id;
        if (selectedQuestionBank === '') {
          selectedQuestionBank = id;
        } else {
          if (selectedQuestionBank.indexOf(id) <= -1) { // id不存在，才增加
            selectedQuestionBank += ',' + id;
          }
        }
      }
      sessionStorage.setItem('$selectedQuestionBank', selectedQuestionBank);
    }
  }

  dataProcess(data: STData[]): STData[] {
    // const that = this; // 拿不到当前this，定义一个变量也不行 // 这个this是当前的dataProcess scope
    const selectedQuestionBank = sessionStorage.getItem('$selectedQuestionBank');
    let selectedArray: string[] = [];
    if (selectedQuestionBank != undefined && selectedQuestionBank.trim() !== '') {
      selectedArray = selectedQuestionBank.split(',');
    }
    return data.map((i, index) => {
      // i.disabled = index === 0;
      // i.checked = index === 0;
      if (selectedArray && selectedArray.indexOf(i.id) > -1) {
        i.checked = true;
      }
      return i;
    });
  }

  save() {
    const questionIds = sessionStorage.getItem('$selectedQuestionBank');
    if (questionIds === undefined || questionIds.trim() === '') {
      this.msgSrv.success('请选择题目。');
      return;
    }
    this.i.orderBy = questionIds;
    this.paperService.addQuestion(this.i).subscribe(result => {
      const uint8Array = new Uint8Array(result, 0, result.byteLength);
      const reply = PaperReply.decode(uint8Array);
      if (reply.code === 1) {
        this.msgSrv.success('成功添加题目到试卷中。');
        sessionStorage.removeItem('$selectedQuestionBank');
      } else {
        this.msgSrv.success(reply.message);
      }
    });
  }
}
