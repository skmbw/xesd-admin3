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
  i: any;
  schema: SFSchema = {
    properties: {
      name: { type: 'string', title: '课程名' },
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
    $name: {
      widget: 'string'
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
          this.i = reply.data[0];
        } else {
          this.msgSrv.success(reply.message);
        }
      });
    } else {
      this.i = new Course();
    }
  }

  save(value: any) {
    this.http.post(`/user/${this.i.id}`, value).subscribe(res => {
      this.msgSrv.success('保存成功');
    });
  }
}
