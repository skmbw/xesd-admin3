import { Injectable } from '@angular/core';
// import { CommonService } from '@shared';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { com } from '@shared';
import Answer = com.xueershangda.tianxun.answer.model.Answer;
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AnswerService extends CommonService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  encode(answer: Answer): ArrayBufferLike {
    const body = Answer.encode(answer).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  save(answer: Answer): Observable<ArrayBuffer> {
    return this.postProtobuf('answer/add', this.encode(answer));
  }

  list(answer: Answer): Observable<ArrayBuffer> {
    return this.postProtobuf('answer/list', this.encode(answer));
  }

  get(id: string): Observable<ArrayBuffer> {
    return this.getArrayBuffer('answer/detail/' + id);
  }
}
