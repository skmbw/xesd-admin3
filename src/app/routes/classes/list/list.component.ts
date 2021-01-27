import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STData } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ClassesEditComponent } from '../edit/edit.component';
import { ClassesService } from '../../../shared/service/classes.service';
import { com } from '@shared';
import { ToastrService } from 'ngx-toastr';
import Classes = com.xueershangda.tianxun.classroom.model.Classes;
import ClassesReply = com.xueershangda.tianxun.classroom.model.ClassesReply;

@Component({
  selector: 'app-classes-list',
  templateUrl: './list.component.html',
})
export class ClassesListComponent implements OnInit {
  url: STData[] = [];
  searchSchema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '班级名'
      }
    }
  };
  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'no' },
    { title: '班级名', index: 'name' },
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
              private classesService: ClassesService, private toastr: ToastrService) { }

  ngOnInit() {
    const classes = new Classes();
    classes.pageSize = 10;
    this.load(classes);
  }

  load(classes: Classes) {
    this.classesService.list(classes).subscribe(result => {
      const uint8Array = new Uint8Array(result, 0, result.byteLength);
      const reply = ClassesReply.decode(uint8Array);
      if (reply.code === 1) {
        this.url = reply.data as STData[];
      } else {
        this.toastr.success(reply.message);
      }
    });
  }

  add() {
    this.modal
      .createStatic(ClassesEditComponent, { i: { id: 0 } })
      .subscribe(() => this.st.reload());
  }

}
