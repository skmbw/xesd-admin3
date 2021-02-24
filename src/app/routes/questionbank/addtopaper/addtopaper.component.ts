import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';
import { PaperService } from '../../../shared/service/paper.service';
import { com, JsUtils } from '@shared';
import { NzModalRef } from 'ng-zorro-antd/modal';
import Paper = com.xueershangda.tianxun.classroom.model.Paper;
import PaperReply = com.xueershangda.tianxun.classroom.model.PaperReply;

@Component({
  selector: 'app-questionbank-addtopaper',
  templateUrl: './addtopaper.component.html',
})
export class QuestionbankAddtopaperComponent implements OnInit {
  title = '选择题目';
  i: any;

  constructor(
    private modal: NzModalRef,
    public msgSrv: NzMessageService,
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
    } else {
      this.i = new Paper();
    }
  }
}
