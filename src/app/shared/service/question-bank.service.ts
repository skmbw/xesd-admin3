import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { com, JsUtils } from '@shared';
import QuestionBank = com.xueershangda.tianxun.classroom.model.QuestionBank;

@Injectable({
  providedIn: 'root'
})
export class QuestionBankService extends CommonService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  list(questionBank: QuestionBank): Observable<ArrayBuffer> {
    return this.postProtobuf('questionBank/list', this.encodeQuestionBank(questionBank));
  }

  add(questionBank: QuestionBank): Observable<ArrayBuffer> {
    if (JsUtils.isNotBlank(questionBank.id)) {
      return this.postProtobuf('questionBank/update', this.encodeQuestionBank(questionBank));
    } else {
      return this.postProtobuf('questionBank/doAdd', this.encodeQuestionBank(questionBank));
    }
  }

  delete(questionBank: QuestionBank): Observable<ArrayBuffer> {
    return this.postProtobuf('questionBank/delete', this.encodeQuestionBank(questionBank));
  }

  get(id: string): Observable<ArrayBuffer> {
    const questionBank = new QuestionBank();
    questionBank.id = id;
    return this.postProtobuf('questionBank/detail', this.encodeQuestionBank(questionBank));
  }
}
