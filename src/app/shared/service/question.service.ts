import { Injectable } from '@angular/core';
// import { CommonService } from '@shared';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { com } from '@shared';
import Question = com.xueershangda.tianxun.question.model.Question;
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends CommonService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  encode(question: Question): ArrayBufferLike {
    const body = Question.encode(question).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  save(question: Question): Observable<ArrayBuffer> {
    return this.postProtobuf('question/add', this.encode(question));
  }

  list(question: Question): Observable<ArrayBuffer> {
    return this.postProtobuf('question/list', this.encode(question));
  }

  get(id: string): Observable<ArrayBuffer> {
    return this.getArrayBuffer('question/detail/' + id);
  }
}
