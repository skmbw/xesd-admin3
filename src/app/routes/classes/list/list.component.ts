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
  // url: Observable<STData[]>;
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
    { title: '班级名', index: 'name' },
    { title: '班主任', index: 'classMaster' },
    { title: '所属年级', index: 'gradeId' },
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
    // this.url = new Observable<STData[]>(subscriber => {
    //   const param = new Classes();
    //   param.pageSize = 10;
    //   this.classesService.list(param).subscribe(result => {
    //     const uint8Array = new Uint8Array(result, 0, result.byteLength);
    //     const reply = ClassesReply.decode(uint8Array);
    //     if (reply.code === 1) {
    //       subscriber.next(reply.data as STData[]);
    //     } else {
    //       this.toastr.success(reply.message);
    //     }
    //   });
    // });
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
