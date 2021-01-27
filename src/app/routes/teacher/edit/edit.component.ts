import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';
import { com, JsUtils } from '@shared';
import { TeacherService } from '../../../shared/service/teacher.service';
import Teacher = com.xueershangda.tianxun.classroom.model.Teacher;
import TeacherReply = com.xueershangda.tianxun.classroom.model.TeacherReply;

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './edit.component.html',
})
export class TeacherEditComponent implements OnInit {
  id = this.route.snapshot.params.id;
  i: Teacher;
  title = '更新老师信息';
  schema: SFSchema = {
    properties: {
      name: { type: 'string', title: '姓名', maxLength: 20 },
      nickName: { type: 'string', title: '昵称', maxLength: 15 },
      remark: { type: 'string', title: '介绍', maxLength: 250 },
      mainlyTeach: { type: 'string', title: '主讲课程', maxLength: 100 },
    },
    required: ['name', 'nickName', 'remark', 'mainlyTeach'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 }
    },
    $name: {
      widget: 'string'
    },
    $nickName: {
      widget: 'string'
    },
    $remark: {
      widget: 'textarea',
      grid: { span: 24 }
    },
    $mainlyTeach: {
      widget: 'string'
    },
  };

  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private msgSrv: NzMessageService,
    public http: _HttpClient, private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    if (JsUtils.isNotBlank(this.id)) {
      this.teacherService.get(this.id).subscribe(result => {
        const uint8Array = new Uint8Array(result, 0, result.byteLength);
        const reply = TeacherReply.decode(uint8Array);
        if (reply.code === 1) {
          this.i = reply.data[0] as Teacher;
        } else {
          this.msgSrv.info(reply.message);
        }
      });
    } else {
      this.i = new Teacher();
      this.title = '新增老师';
    }
  }

  save(value: any) {
    // this.http.post(`/user/${this.i.id}`, value).subscribe(res => {
    //   this.msgSrv.success('保存成功');
    //   // this.modal.close(true);
    // });
    const teacher = value as Teacher;
    this.teacherService.add(teacher).subscribe(result => {});
  }
}
