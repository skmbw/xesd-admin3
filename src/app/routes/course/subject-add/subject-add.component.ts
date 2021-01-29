import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';
import { com, JsUtils } from '@shared';
import { CourseService } from '../../../shared/service/course.service';
import { Observable } from 'rxjs';
import { ClassesService } from '../../../shared/service/classes.service';
import Subject = com.xueershangda.tianxun.classroom.model.Subject;
import SubjectReply = com.xueershangda.tianxun.classroom.model.SubjectReply;
import Grade = com.xueershangda.tianxun.classroom.model.Grade;
import GradeReply = com.xueershangda.tianxun.classroom.model.GradeReply;

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
      version: { type: 'string', title: '版本', maxLength: 15,
        enum: [
          { label: '人教版', value: '1' },
          { label: '华东师大版', value: '2' },
          { label: '北师大', value: '3' },
          { label: '浙教版', value: '4' },
          { label: '苏教版', value: '5' },
        ]
      },
      volume: { type: 'string', title: '上下册',
        enum: [
          { label: '上册', value: '上册' },
          { label: '下册', value: '下册' },
          { label: '全一册', value: '全一册' },
        ]
      },
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
      widget: 'select',
    },
    $volume: {
      widget: 'select',
    },
    $gradeId: {
      widget: 'select',
      asyncData: () =>
        new Observable(subscriber => {
          const grade = new Grade();
          grade.pageSize = 20;
          this.classesService.gradeList(grade).subscribe(result => {
            const uint8Array = new Uint8Array(result, 0, result.byteLength);
            const reply = GradeReply.decode(uint8Array);
            if (reply.code === 1) {
              const gradeList = [];
              let i = 0;
              for (const g of reply.data) {
                gradeList[i++] = {label: g.name, value: g.name};
              }
              subscriber.next([{label: '年级', group: true, children: gradeList}]);
            }
          });
        })
    },
    $remark: {
      widget: 'textarea',
      grid: { span: 24 },
    },
  };

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService, private classesService: ClassesService,
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

  save(value: Subject) {
    this.courseService.addSubject(value).subscribe(result => {
      const uint8Array = new Uint8Array(result, 0, result.byteLength);
      const reply = SubjectReply.decode(uint8Array);
      if (reply.code === 1) {
        this.i = new Subject();
        this.msgSrv.success('保存科目成功');
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
