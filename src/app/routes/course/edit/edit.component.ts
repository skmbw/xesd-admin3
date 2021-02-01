import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';
import { com, JsUtils } from '@shared';
import { CourseService } from '../../../shared/service/course.service';
import Course = com.xueershangda.tianxun.classroom.model.Course;
import CourseReply = com.xueershangda.tianxun.classroom.model.CourseReply;

@Component({
  selector: 'app-course-edit',
  templateUrl: './edit.component.html',
})
export class CourseEditComponent implements OnInit {
  title = '新增课程';
  id = this.route.snapshot.params.id;
  i: Course;
  schema: SFSchema = {
    properties: {
      name: { type: 'string', title: '课程名' },
      subjectId: { type: 'string', title: '所属科目', maxLength: 15 },
      remark: { type: 'string', title: '课程介绍' },
      teacherId: { type: 'string', title: '主讲老师' },
      type: { type: 'string', title: '课程类型', enum: [
          {
            label: '视频直播',
            value: '1'
          },
          {
            label: '图文直播',
            value: '2'
          }
        ]},
      startDate: { type: 'string', title: '开课时间' },
      endDate: { type: 'string', title: '结课时间' },
    },
    required: ['name', 'subjectId', 'teacherId', 'type'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    },
    $name: {
      widget: 'string'
    },
    $subjectId: {
      widget: 'string',
    },
    $remark: {
      widget: 'textarea',
      grid: { span: 24 },
    },
    $teacherId: {
      widget: 'string',
    },
    $type: {
      widget: 'select',
    },
    $startDate: {
      widget: 'date',
    },
    $endDate: {
      widget: 'date',
    }
  };

  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private msgSrv: NzMessageService,
    public http: _HttpClient, private courseService: CourseService
  ) {}

  ngOnInit(): void {
    if (JsUtils.isNotBlank(this.id)) {
      this.courseService.get(this.id).subscribe(result => {
        const uint8Array = new Uint8Array(result, 0, result.byteLength);
        const reply = CourseReply.decode(uint8Array);
        if (reply.code === 1) {
          this.i = reply.data[0] as Course;
        } else {
          this.msgSrv.success(reply.message);
        }
      });
    } else {
      this.i = new Course();
      this.i.startDate = Date.now();
      this.i.endDate = Date.now(); // 在json schema配置默认值不行，还是1970-1-1。利用angular的数据绑定，在这里给默认值吧
    }
  }

  save(value: any) {
    this.http.post(`/user/${this.i.id}`, value).subscribe(res => {
      this.msgSrv.success('保存成功');
    });
  }
}
