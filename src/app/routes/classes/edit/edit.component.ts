import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';
import { com, JsUtils } from '@shared';
import { ClassesService } from '../../../shared/service/classes.service';
import { Observable } from 'rxjs';
import { NzModalRef } from 'ng-zorro-antd/modal';
import Classes = com.xueershangda.tianxun.classroom.model.Classes;
import ClassesReply = com.xueershangda.tianxun.classroom.model.ClassesReply;
import Grade = com.xueershangda.tianxun.classroom.model.Grade;
import GradeReply = com.xueershangda.tianxun.classroom.model.GradeReply;

@Component({
  selector: 'app-classes-edit',
  templateUrl: './edit.component.html',
})
export class ClassesEditComponent implements OnInit {
  title = '新建班级';
  id = this.route.snapshot.params.id;
  i: Classes;
  schema: SFSchema = {
    properties: {
      name: { type: 'string', title: '班级名', maxLength: 50 },
      remark: { type: 'string', title: '班级描述'},
      gradeId: { type: 'string', title: '所属年级' },
      classMaster: { type: 'string', title: '班主任'},
      startDate: { type: 'number', title: '开课时间', ui: {widget: 'date'}, default: Date.now() },
      endDate: { type: 'number', title: '结束时间' },
      type: { type: 'string', title: '互动类型' },
    },
    required: ['name', 'remark', 'classMaster'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    },
    $name: {
      widget: 'string'
    },
    $remark: {
      widget: 'string',
    },
    $gradeId: {
      widget: 'select',
      asyncData: () =>
        new Observable(subscriber => {
          const grade = new Grade();
          grade.pageSize = 20;
          this.classesService.gradeList(grade).subscribe(result => {
            const uint8Array = new Uint8Array(result, 0, result.byteLength);
            const reply = GradeReply.decode(uint8Array);
            if (reply.code === 1) {
              const gradeList = [];
              let i = 0;
              for (const g of reply.data) {
                gradeList[i++] = {label: g.name, value: g.id};
              }
              subscriber.next([{label: '年级', group: true, children: gradeList}]);
            }
          });
        })
    },
    $classMaster: {
      widget: 'string',
    },
    $startDate: {
      widget: 'date',
    },
    $endDate: {
      widget: 'date',
    },
    $type: {
      widget: 'string',
    },
  };

  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private msgSrv: NzMessageService, private modal: NzModalRef,
    public http: _HttpClient, private classesService: ClassesService
  ) {}

  ngOnInit(): void {
    if (JsUtils.isNotBlank(this.id)) {
      this.title = '修改班级信息';
      this.classesService.get(this.id).subscribe(result => {
        const uint8Array = new Uint8Array(result, 0, result.byteLength);
        const reply = ClassesReply.decode(uint8Array);
        if (reply.code === 1) {
          this.i = reply.data[0] as Classes;
        } else {
          this.msgSrv.success(reply.message);
        }
      });
    } else {
      this.i = new Classes();
    }
  }

  save(value: any) {
    this.classesService.add(value).subscribe(result => {
      const uint8Array = new Uint8Array(result, 0, result.byteLength);
      const reply = ClassesReply.decode(uint8Array);
      if (reply.code === 1) {
        this.msgSrv.success('新增班级成功');
        this.modal.close(true);
      } else {
        this.msgSrv.success(reply.message);
      }
    });
  }
}
