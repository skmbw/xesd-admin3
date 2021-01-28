import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';
import { com, JsUtils } from '@shared';
import { ClassesService } from '../../../shared/service/classes.service';
import Grade = com.xueershangda.tianxun.classroom.model.Grade;
import GradeReply = com.xueershangda.tianxun.classroom.model.GradeReply;

@Component({
  selector: 'app-classes-grade-add',
  templateUrl: './grade-add.component.html',
})
export class ClassesGradeAddComponent implements OnInit {
  record: any = {};
  i: any;
  title = '新增年级';
  schema: SFSchema = {
    properties: {
      name: { type: 'string', title: '年级名' },
      remark: { type: 'string', title: '年级描述' },
      gradeMaster: { type: 'string', title: '年级主任' },
    },
    required: ['name', 'remark', 'gradeMaster'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    },
    $name: {
      widget: 'string'
    },
    $remark: {
      widget: 'string',
    },
    $gradeMaster: {
      widget: 'string',
    },
  };

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    public http: _HttpClient, private classesService: ClassesService
  ) {}

  ngOnInit(): void {
    if (JsUtils.isNotBlank(this.i.id)) {
      this.title = '修改年级信息';
      // 暂时没有修改功能
      this.i = new Grade();
    } else {
      this.i = new Grade();
    }
  }

  save(value: any) {
    this.classesService.addGrade(value).subscribe(result => {
      const uint8Array = new Uint8Array(result, 0, result.byteLength);
      const reply = GradeReply.decode(uint8Array);
      if (reply.code === 1) {
        this.msgSrv.success('保存成功');
        this.modal.close(true);
      }
    });
  }

  close() {
    this.modal.destroy();
  }
}
