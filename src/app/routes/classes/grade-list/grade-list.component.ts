import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STData } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ClassesGradeAddComponent } from '../grade-add/grade-add.component';
import { ClassesService } from '../../../shared/service/classes.service';
import { com } from '@shared';
import { ToastrService } from 'ngx-toastr';
import Grade = com.xueershangda.tianxun.classroom.model.Grade;
import GradeReply = com.xueershangda.tianxun.classroom.model.GradeReply;

@Component({
  selector: 'app-classes-grade-list',
  templateUrl: './grade-list.component.html',
})
export class ClassesGradeListComponent implements OnInit {
  url: STData[] = [];
  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '年级名'
      }
    }
  };
  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: '年级名', index: 'name' },
    { title: '描述', index: 'remark' },
    { title: '年级主任', index: 'gradeMaster' },
    {
      title: '',
      buttons: [
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper,
              private classesService: ClassesService, private message: ToastrService) { }

  ngOnInit() {
    const grade = new Grade();
    grade.pageSize = 10;
    this.classesService.gradeList(grade).subscribe(result => {
      const uint8Array = new Uint8Array(result, 0, result.byteLength);
      const reply = GradeReply.decode(uint8Array);
      if (reply.code === 1) {
        this.url = reply.data;
      } else {
        this.message.success(reply.message);
      }
    });
  }

  add() {
    this.modal
      .createStatic(ClassesGradeAddComponent, { i: { id: 0 } })
      .subscribe(() => this.st.reload());
  }

}
