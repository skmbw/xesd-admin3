import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STData } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { Router } from '@angular/router';
import { TeacherService } from '../../../shared/service/teacher.service';
import { com } from '@shared';
import { NzMessageService } from 'ng-zorro-antd';
import Teacher = com.xueershangda.tianxun.classroom.model.Teacher;
import TeacherReply = com.xueershangda.tianxun.classroom.model.TeacherReply;

@Component({
  selector: 'app-teacher-list',
  templateUrl: './list.component.html',
})
export class TeacherListComponent implements OnInit {
  url: STData[] = [];
  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '姓名'
      }
    }
  };
  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: '姓名', index: 'name' },
    { title: '昵称', index: 'nickName' },
    { title: '主讲课程', index: 'mainlyTeach' },
    {
      title: '',
      buttons: [
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        { text: '编辑', type: 'link', click: (item: any) => `/teacher/edit/${item.id}` },
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper,
              private router: Router, private teacherService: TeacherService,
              private message: NzMessageService) { }

  ngOnInit() {
    const teacher = new Teacher();
    teacher.pageSize = 10; // 空对象，无法序列化？这个的默认值也是10，就给它赋值10吧
    this.teacherService.list(teacher).subscribe(result => {
      const uint8Array = new Uint8Array(result, 0, result.byteLength);
      const reply = TeacherReply.decode(uint8Array);
      if (reply.code === 1) {
        this.url = reply.data as STData[];
      } else {
        this.message.info(reply.message);
      }
    });
  }

  add() {
    this.router.navigateByUrl('teacher/edit').catch();
  }

}
