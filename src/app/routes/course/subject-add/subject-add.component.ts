import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';
import { com, JsUtils } from '@shared';
import { CourseService } from '../../../shared/service/course.service';
import Subject = com.xueershangda.tianxun.classroom.model.Subject;
import SubjectReply = com.xueershangda.tianxun.classroom.model.SubjectReply;

@Component({
  selector: 'app-course-subject-add',
  templateUrl: './subject-add.component.html',
})
export class CourseSubjectAddComponent implements OnInit {
  record: any = {};
  i: Subject;
  title = '新增科目';
  schema: SFSchema = {
    properties: {
      name: { type: 'string', title: '科目名' },
      version: { type: 'string', title: '版本', maxLength: 15 },
      volume: { type: 'string', title: '上下册' },
      gradeId: { type: 'string', title: '所属年级' },
      remark: { type: 'string', title: '描述', maxLength: 140 },
    },
    required: ['name', 'version', 'volume', 'gradeId'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    },
    $name: {
      widget: 'string'
    },
    $version: {
      widget: 'string',
    },
    $volume: {
      widget: 'string',
    },
    $gradeId: {
      widget: 'string',
    },
    $remark: {
      widget: 'textarea',
      grid: { span: 24 },
    },
  };

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    public http: _HttpClient, private courseService: CourseService
  ) {}

  ngOnInit(): void {
    if (JsUtils.isBlank(this.i.id)) {
      this.i = new Subject();
    } else {
      this.title = '修改科目信息';
      this.courseService.getSubject(this.i.id).subscribe(result => {
        const uint8Array = new Uint8Array(result, 0, result.byteLength);
        const reply = SubjectReply.decode(uint8Array);
        if (reply.code === 1) {
          this.i = reply.data[0] as Subject;
        } else {
          this.msgSrv.success(reply.message);
        }
      });
    }
  }

  save(value: any) {
    this.http.post(`/user/${this.record.id}`, value).subscribe(res => {
      this.msgSrv.success('保存成功');
      this.modal.close(true);
    });
  }

  close() {
    this.modal.destroy();
  }
}
