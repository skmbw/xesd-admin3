import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';
import { PaperService } from '../../../shared/service/paper.service';
import { com, JsUtils } from '@shared';
import { Observable } from 'rxjs';
import { ClassesService } from '../../../shared/service/classes.service';
import { CourseService } from '../../../shared/service/course.service';
import PaperReply = com.xueershangda.tianxun.classroom.model.PaperReply;
import Paper = com.xueershangda.tianxun.classroom.model.Paper;
import Subject = com.xueershangda.tianxun.classroom.model.Subject;
import GradeReply = com.xueershangda.tianxun.classroom.model.GradeReply;
import Grade = com.xueershangda.tianxun.classroom.model.Grade;
import SubjectReply = com.xueershangda.tianxun.classroom.model.SubjectReply;

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
      name: { type: 'string', title: '试卷名', maxLength: 30 },
      remark: { type: 'string', title: '描述' },
      score: { type: 'number', title: '分数' },
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
    $name: {
      widget: 'string',
    },
    $remark: {
      widget: 'textarea',
      grid: { span: 24 },
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
    $subjectId: {
      widget: 'select',
      asyncData: () =>
        new Observable(subscriber => {
          const subject = new Subject();
          subject.pageSize = 20;
          this.courseService.querySubjectList(subject).subscribe(result => {
            const uint8Array = new Uint8Array(result, 0, result.byteLength);
            const reply = SubjectReply.decode(uint8Array);
            if (reply.code === 1) {
              const subjectList = [];
              let i = 0;
              for (const g of reply.data) {
                subjectList[i++] = { label: g.remark, value: g.remark };
              }
              subscriber.next([{ label: '科目', group: true, children: subjectList }]);
            }
          });
        })
    },
    $score: {
      widget: 'number',
    },
  };

  constructor(
    private modal: NzModalRef, private courseService: CourseService,
    private msgSrv: NzMessageService, private classesService: ClassesService,
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
