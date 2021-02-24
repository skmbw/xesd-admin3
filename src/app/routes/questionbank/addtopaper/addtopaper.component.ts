import { Component, OnInit, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';
import { PaperService } from '../../../shared/service/paper.service';
import { com, JsUtils } from '@shared';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { STColumn, STComponent, STData } from '@delon/abc/st';
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
    // { title: '所属年级', index: 'gradeId' },
    // { title: '所属科目', index: 'subjectId' },
    // { title: '作者', index: 'author' },
    { title: '更新时间', index: 'updateDate', type: 'date' },
    {
      title: '',
      buttons: [
      ]
    }
  ];

  constructor(
    private modal: NzModalRef,
    public msgSrv: NzMessageService, private questionBankService: QuestionBankService,
    public http: _HttpClient, private paperService: PaperService
  ) { }

  ngOnInit(): void {
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
      this.questionBankService.list(questionBank).subscribe(result => {
        const uint8Array = new Uint8Array(result, 0, result.byteLength);
        const reply = QuestionBankReply.decode(uint8Array);
        if (reply.code === 1) {
          this.url = reply.data;
        } else {
          this.msgSrv.success(reply.message);
        }
      });
    } else { // id不可能为空
      this.msgSrv.success('试卷id不能为空。');
    }
  }
}
