import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';
import { PaperService } from '../../../shared/service/paper.service';
import { com, JsUtils } from '@shared';
import { ClassesService } from '../../../shared/service/classes.service';
import { CourseService } from '../../../shared/service/course.service';
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
      name: { type: 'string', title: '试卷名', maxLength: 30 },
      remark: { type: 'string', title: '描述' },
      score: { type: 'number', title: '分数' },
      gradeId: {
        type: 'string', title: '年级', enum: [
          { label: '幼儿园', value: '幼儿园' },
          { label: '一年级', value: '一年级' },
          { label: '二年级', value: '二年级' },
          { label: '三年级', value: '三年级' },
          { label: '四年级', value: '四年级' },
          { label: '五年级', value: '五年级' },
          { label: '六年级', value: '六年级' },
          { label: '七年级', value: '七年级' },
          { label: '八年级', value: '八年级' },
          { label: '九年级', value: '九年级' }
        ]
      },
      subjectId: {
        type: 'string', title: '科目', enum: [
          { label: '语文', value: '语文' },
          { label: '数学', value: '数学' },
          { label: '英语', value: '英语' },
          { label: '科学', value: '科学' },
          { label: '物理', value: '物理' },
          { label: '化学', value: '化学' },
          { label: '生物', value: '生物' },
          { label: '历史', value: '历史' },
          { label: '地理', value: '地理' },
          { label: '政治', value: '政治' },
          { label: '美术', value: '美术' },
          { label: '音乐', value: '音乐' },
          { label: '体育', value: '体育' }
        ]
      },
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
      // asyncData: () =>
      //   new Observable(subscriber => {
      //     const grade = new Grade();
      //     grade.pageSize = 20;
      //     this.classesService.gradeList(grade).subscribe(result => {
      //       const uint8Array = new Uint8Array(result, 0, result.byteLength);
      //       const reply = GradeReply.decode(uint8Array);
      //       if (reply.code === 1) {
      //         const gradeList = [];
      //         let i = 0;
      //         for (const g of reply.data) {
      //           gradeList[i++] = {label: g.name, value: g.name};
      //         }
      //         subscriber.next([{label: '年级', group: true, children: gradeList}]);
      //       }
      //     });
      //   })
    },
    $subjectId: {
      widget: 'select',
      // asyncData: () =>
      //   new Observable(subscriber => {
      //     const subject = new Subject();
      //     subject.pageSize = 20;
      //     this.courseService.querySubjectList(subject).subscribe(result => {
      //       const uint8Array = new Uint8Array(result, 0, result.byteLength);
      //       const reply = SubjectReply.decode(uint8Array);
      //       if (reply.code === 1) {
      //         const subjectList = [];
      //         let i = 0;
      //         for (const g of reply.data) {
      //           subjectList[i++] = { label: g.remark, value: g.remark };
      //         }
      //         subscriber.next([{ label: '科目', group: true, children: subjectList }]);
      //       }
      //     });
      //   })
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
