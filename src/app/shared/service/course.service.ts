import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { com, JsUtils } from '@shared';
import Subject = com.xueershangda.tianxun.classroom.model.Subject;
import Course = com.xueershangda.tianxun.classroom.model.Course;

@Injectable({
  providedIn: 'root'
})
export class CourseService extends CommonService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  list(course: Course): Observable<ArrayBuffer> {
    return this.postProtobuf('course/list', this.encodeCourse(course));
  }

  addOrUpdate(course: Course): Observable<ArrayBuffer> {
    if (JsUtils.isNotBlank(course.id)) {
      return this.postProtobuf('course/update', this.encodeCourse(course));
    } else {
      return this.postProtobuf('course/doAdd', this.encodeCourse(course));
    }
  }

  delete(courseId: String): Observable<ArrayBuffer> {
    return this.getArrayBuffer('course/delete/' + courseId);
  }

  get(id: string): Observable<ArrayBuffer> {
    const course = new Course();
    course.id = id;
    return this.postProtobuf('course/detail', this.encodeCourse(course));
  }

  getSubject(id: string): Observable<ArrayBuffer> {
    const subject = new Subject();
    subject.id = id;
    return this.postProtobuf('subject/detail', this.encodeSubject(subject));
  }

  addSubject(subject: Subject) {
    return this.postProtobuf('subject/doAdd', this.encodeSubject(subject));
  }

  querySubjectList(subject: Subject) {
    return this.postProtobuf('subject/list', this.encodeSubject(subject));
  }
}
