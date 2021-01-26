import { Injectable } from '@angular/core';
// import { CommonService } from '@shared';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { com } from '@shared';
import { CommonService } from './common.service';
import Answer = com.xueershangda.tianxun.answer.model.Answer;

@Injectable({
  providedIn: 'root'
})
export class AnswerService extends CommonService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  save(answer: Answer): Observable<ArrayBuffer> {
    return this.postProtobuf('answer/add', this.encodeAnswer(answer));
  }

  list(answer: Answer): Observable<ArrayBuffer> {
    return this.postProtobuf('answer/list', this.encodeAnswer(answer));
  }

  get(id: string): Observable<ArrayBuffer> {
    return this.getArrayBuffer('answer/detail/' + id);
  }
}
