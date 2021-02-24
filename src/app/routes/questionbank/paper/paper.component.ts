import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STData } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { QuestionbankCreatePaperComponent } from '../create-paper/create-paper.component';
import { PaperService } from '../../../shared/service/paper.service';
import { com } from '@shared';
import { NzMessageService } from 'ng-zorro-antd';
import { QuestionbankAddtopaperComponent } from '../addtopaper/addtopaper.component';
import Paper = com.xueershangda.tianxun.classroom.model.Paper;
import PaperReply = com.xueershangda.tianxun.classroom.model.PaperReply;

@Component({
  selector: 'app-questionbank-paper',
  templateUrl: './paper.component.html',
})
export class QuestionbankPaperComponent implements OnInit {
  url: STData[] = [];
  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '试卷名'
      }
    }
  };
  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '试卷名', index: 'name' },
    { title: '描述', index: 'remark' },
    { title: '科目', index: 'subjectId' },
    { title: '年级', index: 'gradeId' },
    {
      title: '',
      buttons: [
        { text: '编辑',
          click: (item: any) => {
            this.modal.createStatic(QuestionbankCreatePaperComponent, {i: item}).subscribe(result => this.st.reload())
          }
        },
        { text: '添加题目',
          click: (item: any) => {
            this.modal.createStatic(QuestionbankAddtopaperComponent, {i: item}).subscribe(result => this.st.reload())
          }
        },
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper,
              private paperService: PaperService, private message: NzMessageService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    const paper = new Paper();
    paper.pageSize = 20;
    this.paperService.list(paper).subscribe(result => {
      const uint8Array = new Uint8Array(result, 0, result.byteLength);
      const reply = PaperReply.decode(uint8Array);
      if (reply.code === 1) {
        this.url = reply.data as STData[];
      } else {
        this.message.success(reply.message);
      }
    });
  }

  add() {
    this.modal
      .createStatic(QuestionbankCreatePaperComponent, { i: { id: 0 } })
      .subscribe(() => this.load());
  }

}
