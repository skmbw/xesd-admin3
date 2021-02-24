import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { com, JsUtils } from '@shared';
import Paper = com.xueershangda.tianxun.classroom.model.Paper;

@Injectable({
  providedIn: 'root'
})
export class PaperService extends CommonService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  list(paper: Paper): Observable<ArrayBuffer> {
    return this.postProtobuf('paper/list', this.encodePaper(paper));
  }

  add(paper: Paper): Observable<ArrayBuffer> {
    if (paper.id && JsUtils.isNotBlank(paper.id)) { // 当不存在paper.id这个属性时，调用.trim()方法，会出现value.trim is not a function
      return this.postProtobuf('paper/update', this.encodePaper(paper));
    } else {
      return this.postProtobuf('paper/doAdd', this.encodePaper(paper));
    }
  }

  delete(paper: Paper): Observable<ArrayBuffer> {
    return this.postProtobuf('paper/delete', this.encodePaper(paper));
  }

  get(id: string): Observable<ArrayBuffer> {
    const paper = new Paper();
    paper.id = id;
    return this.postProtobuf('paper/detail', this.encodePaper(paper));
  }
}
