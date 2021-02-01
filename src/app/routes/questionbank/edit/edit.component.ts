import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';
import { com, JsUtils } from '@shared';
import { NzModalRef } from 'ng-zorro-antd';
import { QuestionBankService } from '../../../shared/service/question-bank.service';
import QuestionBank = com.xueershangda.tianxun.classroom.model.QuestionBank;
import QuestionBankReply = com.xueershangda.tianxun.classroom.model.QuestionBankReply;

@Component({
  selector: 'app-questionbank-edit',
  templateUrl: './edit.component.html',
})
export class QuestionbankEditComponent implements OnInit {
  title = '新增题库题目';
  id = this.route.snapshot.params.id;
  i: QuestionBank;
  schema: SFSchema = {
    properties: {
      id: { type: 'string', title: '编号' },
      title: { type: 'string', title: '标题' },
      remark: { type: 'string', title: '题目内容' },
      type: { type: 'string', title: '题目类型' },
      gradeId: { type: 'string', title: '年级' },
      subjectId: { type: 'string', title: '科目' },
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
    $title: {
      widget: 'string',
    },
    $remark: {
      widget: 'textarea',
      grid: { span: 24 },
    },
    $type: {
      widget: 'select',
    },
    $gradeId: {
      widget: 'select',
    },
    $subjectId: {
      widget: 'select',
    },
  };

  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private msgSrv: NzMessageService, private modal: NzModalRef,
    public http: _HttpClient, private questionBankService: QuestionBankService
  ) {}

  ngOnInit(): void {
    if (JsUtils.isNotBlank(this.id)) {
      this.questionBankService.get(this.id).subscribe(result => {
        const uint8Array = new Uint8Array(result, 0, result.byteLength);
        const reply = QuestionBankReply.decode(uint8Array);
        if (reply.code === 1) {
          this.i = reply.data[0] as QuestionBank;
        } else {
          this.msgSrv.success(reply.message);
        }
      });
      this.title = '修改题目题目';
    } else {
      this.i = new QuestionBank()
    }
  }

  save(value: any) {
    this.questionBankService.add(value).subscribe(result => {
      const uint8Array = new Uint8Array(result, 0, result.byteLength);
      const reply = QuestionBankReply.decode(uint8Array);
      if (reply.code === 1) {
        this.msgSrv.success('保存题目成功。');
        this.modal.close(true);
      } else {
        this.msgSrv.success(reply.message);
      }
    });
  }
}
