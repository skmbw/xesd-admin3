import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';
import { com, JsUtils } from '@shared';
import { TeacherService } from '../../../shared/service/teacher.service';
import Teacher = com.xueershangda.tianxun.classroom.model.Teacher;

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
      no: { type: 'string', title: '编号' },
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
    $no: {
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
    private route: ActivatedRoute,
    public location: Location,
    private msgSrv: NzMessageService,
    public http: _HttpClient, private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    // if (this.id > 0)
    // this.http.get(`/user/${this.i.id}`).subscribe(res => (this.i = res));
    if (JsUtils.isNotBlank(this.id)) {

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
