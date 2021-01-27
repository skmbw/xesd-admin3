import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { com, JsUtils } from '@shared';
import Classes = com.xueershangda.tianxun.classroom.model.Classes;

@Injectable({
  providedIn: 'root'
})
export class ClassesService extends CommonService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  list(classes: Classes): Observable<ArrayBuffer> {
    return this.postProtobuf('classes/list', this.encodeClasses(classes));
  }

  add(classes: Classes): Observable<ArrayBuffer> {
    if (JsUtils.isNotBlank(classes.id)) {
      return this.postProtobuf('classes/update', this.encodeClasses(classes));
    } else {
      return this.postProtobuf('classes/doAdd', this.encodeClasses(classes));
    }
  }

  delete(classes: Classes): Observable<ArrayBuffer> {
    return this.postProtobuf('classes/delete', this.encodeClasses(classes));
  }

  get(id: string): Observable<ArrayBuffer> {
    const classes = new Classes();
    classes.id = id;
    return this.postProtobuf('classes/detail', this.encodeClasses(classes));
  }
}
