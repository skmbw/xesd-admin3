import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STData } from '@delon/abc';
import { SFSchema } from '@delon/form';
// import { QuestionService } from '@shared';
import { QuestionEditComponent } from '../edit/edit.component';
import { com } from '@shared';
import { NzMessageService } from 'ng-zorro-antd';
// import { ConfirmService } from '@shared';
import Question = com.xueershangda.tianxun.question.model.Question;
import QuestionReply = com.xueershangda.tianxun.question.model.QuestionReply;
import { ConfirmService } from '../../../shared/service/confirm.service';
import { QuestionService } from '../../../shared/service/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './list.component.html',
})
export class QuestionListComponent implements OnInit {
  url: STData[] = [];
  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号'
      }
    }
  };
  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '调用次数', type: 'number', index: 'callNo' },
    { title: '头像', type: 'img', width: '50px', index: 'avatar' },
    { title: '标题', index: 'title' },
    { title: '时间', type: 'date', index: 'askDate' },
    {
      title: '',
      buttons: [
        { text: '查看', click: (item: any) => `/form/${item.id}` },
        { text: '编辑', type: 'link', click: (item: any) => `/question/edit/${item.id}` },
        {
          text: '删除', click: (item: any) => {
            this.confirmService.confirm('删除后不可恢复，您确定要删除该问题？').subscribe(result => {
              if (result) {

              }
            });
          }
        }
      ]
    }
  ];

  constructor(private confirmService: ConfirmService, private modal: ModalHelper,
              private questionService: QuestionService, private msgSrv: NzMessageService) { }

  ngOnInit() {
    const question = new Question();
    question.page = 1;
    question.pageSize = 20;
    this.questionService.list(question).subscribe(result => {
      const uint8Array = new Uint8Array(result, 0, result.byteLength);
      const reply = QuestionReply.decode(uint8Array);
      if (reply.code === 1) {
        this.url = reply.data as STData[];
      } else {
        this.msgSrv.info(reply.message);
      }
    });
  }

  add() {
    this.modal
      .createStatic(QuestionEditComponent, { i: { id: null } })
      .subscribe(() => this.st.reload());
  }

}
