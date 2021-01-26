import { Injectable } from '@angular/core';
// import { CommonService } from '@shared';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { com } from '@shared';
import { CommonService } from './common.service';
import Question = com.xueershangda.tianxun.question.model.Question;

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends CommonService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  save(question: Question): Observable<ArrayBuffer> {
    return this.postProtobuf('question/add', this.encodeQuestion(question));
  }

  list(question: Question): Observable<ArrayBuffer> {
    return this.postProtobuf('question/list', this.encodeQuestion(question));
  }

  get(id: string): Observable<ArrayBuffer> {
    return this.getArrayBuffer('question/detail/' + id);
  }
}
