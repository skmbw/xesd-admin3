import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STData } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { CourseSubjectAddComponent } from '../subject-add/subject-add.component';
import { CourseService } from '../../../shared/service/course.service';
import { com } from '@shared';
import { NzMessageService } from 'ng-zorro-antd';
import Subject = com.xueershangda.tianxun.classroom.model.Subject;
import SubjectReply = com.xueershangda.tianxun.classroom.model.SubjectReply;

@Component({
  selector: 'app-course-subject-list',
  templateUrl: './subject-list.component.html',
})
export class CourseSubjectListComponent implements OnInit {
  url: STData[] = [];
  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号'
      }
    }
  };
  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: '课程名', index: 'name' },
    { title: '调用次数', type: 'number', index: 'callNo' },
    { title: '头像', type: 'img', width: '50px', index: 'avatar' },
    { title: '时间', type: 'date', index: 'updatedAt' },
    {
      title: '',
      buttons: [
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper,
              private courseService: CourseService, private message: NzMessageService) { }

  ngOnInit() {
    const subject = new Subject();
    subject.pageSize = 20;
    this.courseService.querySubjectList(subject).subscribe(result => {
      const uint8Array = new Uint8Array(result, 0, result.byteLength);
      const reply = SubjectReply.decode(uint8Array);
      if (reply.code === 1) {
        this.url = reply.data;
      } else {
        this.message.success(reply.message);
      }
    });
  }

  add() {
    this.modal
      .createStatic(CourseSubjectAddComponent, { i: { id: 0 } })
      .subscribe(() => this.st.reload());
  }

}
