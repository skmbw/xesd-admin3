import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';
import { PaperService } from '../../../shared/service/paper.service';
import { com, JsUtils } from '@shared';
import PaperReply = com.xueershangda.tianxun.classroom.model.PaperReply;
import Paper = com.xueershangda.tianxun.classroom.model.Paper;

@Component({
  selector: 'app-questionbank-create-paper',
  templateUrl: './create-paper.component.html',
})
export class QuestionbankCreatePaperComponent implements OnInit {
  title = '新增试卷';
  record: any = {};
  i: any;
  schema: SFSchema = {
    properties: {
      id: { type: 'string', title: '编号' },
      owner: { type: 'string', title: '姓名', maxLength: 15 },
      callNo: { type: 'number', title: '调用次数' },
      href: { type: 'string', title: '链接', format: 'uri' },
      description: { type: 'string', title: '描述', maxLength: 140 },
    },
    required: ['owner', 'callNo', 'href', 'description'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    },
    $id: {
      widget: 'text'
    },
    $href: {
      widget: 'string',
    },
    $description: {
      widget: 'textarea',
      grid: { span: 24 },
    },
  };

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    public http: _HttpClient, private paperService: PaperService
  ) {}

  ngOnInit(): void {
    if (JsUtils.isNotBlank(this.i.id)) {
      this.paperService.get(this.i.id).subscribe(result => {
        const uint8Array = new Uint8Array(result, 0, result.byteLength);
        const reply = PaperReply.decode(uint8Array);
        if (reply.code === 1) {
          this.i = reply.data[0] as Paper;
        } else {
          this.msgSrv.success(reply.message);
        }
      });
      this.title = '修改试卷';
    } else {
      this.i = new Paper();
    }
  }

  save(value: any) {
    this.paperService.add(value as Paper).subscribe(result => {
      const uint8Array = new Uint8Array(result, 0, result.byteLength);
      const reply = PaperReply.decode(uint8Array);
      if (reply.code === 1) {
        this.msgSrv.success('新增试卷保存成功。');
        this.modal.close(true);
      } else {
        this.msgSrv.success(reply.message);
      }
    });
  }

  close() {
    this.modal.destroy();
  }
}
