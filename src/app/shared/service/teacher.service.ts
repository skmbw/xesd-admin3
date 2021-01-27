import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { com } from '@shared';
import Teacher = com.xueershangda.tianxun.classroom.model.Teacher;

@Injectable({
  providedIn: 'root',
})
export class TeacherService extends CommonService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  list(teacher: Teacher): Observable<ArrayBuffer> {
    return this.postProtobuf('teacher/list', this.encodeTeacher(teacher));
  }

  add(teacher: Teacher): Observable<ArrayBuffer> {
    return this.postProtobuf('teacher/doAdd', this.encodeTeacher(teacher));
  }

  delete(teacher: Teacher): Observable<ArrayBuffer> {
    return this.postProtobuf('teacher/delete', this.encodeTeacher(teacher));
  }

  get(id: string): Observable<ArrayBuffer> {
    const teacher = new Teacher();
    teacher.id = id;
    return this.postProtobuf('teacher/detail', this.encodeTeacher(teacher));
  }
}
