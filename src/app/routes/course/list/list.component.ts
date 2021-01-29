import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STData } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { CourseEditComponent } from '../edit/edit.component';
import { CourseService } from '../../../shared/service/course.service';
import { com } from '@shared';
import { ToastrService } from 'ngx-toastr';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import Course = com.xueershangda.tianxun.classroom.model.Course;
import CourseReply = com.xueershangda.tianxun.classroom.model.CourseReply;

@Component({
  selector: 'app-course-list',
  templateUrl: './list.component.html',
})
export class CourseListComponent implements OnInit {
  url: STData[] = [];
  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '课程名'
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
              private courseService: CourseService, private message: ToastrService,
              private injector: Injector) { }

  ngOnInit() {
    const course = new Course();
    course.pageSize = 20;
    course.userId = (this.injector.get(DA_SERVICE_TOKEN) as ITokenService).get().id;
    this.courseService.list(course).subscribe(result => {
      const uint8Array = new Uint8Array(result, 0, result.byteLength);
      const reply = CourseReply.decode(uint8Array);
      if (reply.code === 1) {
        this.url = reply.data as STData[];
      } else {
        this.message.success(reply.message);
      }
    });
  }

  add() {
    this.modal
      .createStatic(CourseEditComponent, { i: { id: 0 } })
      .subscribe(() => this.st.reload());
  }

}
