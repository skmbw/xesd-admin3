import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STData } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { QuestionbankEditComponent } from '../edit/edit.component';
import { QuestionBankService } from '../../../shared/service/question-bank.service';
import { NzMessageService } from 'ng-zorro-antd';
import { com } from '@shared';
import QuestionBank = com.xueershangda.tianxun.classroom.model.QuestionBank;
import QuestionBankReply = com.xueershangda.tianxun.classroom.model.QuestionBankReply;

@Component({
  selector: 'app-questionbank-list',
  templateUrl: './list.component.html',
})
export class QuestionbankListComponent implements OnInit {
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
    { title: '题目', index: 'title' },
    { title: '题目类型', index: 'type' },
    { title: '所属年级', index: 'gradeId' },
    { title: '所属科目', index: 'subjectId' },
    { title: '作者', index: 'author' },
    { title: '状态', index: 'state' },
    { title: '创建时间', index: 'createDate' },
    { title: '更新时间', index: 'updateDate' },
    {
      title: '',
      buttons: [
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper,
              private questionBankService: QuestionBankService, private message: NzMessageService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    const questionBank = new QuestionBank();
    questionBank.pageSize = 20;
    this.questionBankService.list(questionBank).subscribe(result => {
      const uint8Array = new Uint8Array(result, 0, result.byteLength);
      const reply = QuestionBankReply.decode(uint8Array);
      if (reply.code === 1) {
        this.url = reply.data;
      } else {
        this.message.success(reply.message);
      }
    });
  }

  add() {
    this.modal
      .createStatic(QuestionbankEditComponent, { i: { id: 0 } })
      .subscribe(() => this.load());
  }

}
