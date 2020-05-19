// import { CommonService } from '@shared';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { com } from '@shared';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';
import Article = com.xueershangda.tianxun.article.model.Article;

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends CommonService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  encode(article: Article): ArrayBufferLike {
    const body = Article.encode(article).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  save(article: Article): Observable<ArrayBuffer> {
    return this.postProtobuf('article/add', this.encode(article));
  }

  list(article: Article): Observable<ArrayBuffer> {
    return this.postProtobuf('article/list', this.encode(article));
  }

  get(id: string): Observable<ArrayBuffer> {
    return this.getArrayBuffer('article/detail/' + id);
  }

  delete(article: Article): Observable<ArrayBuffer> {
    return this.postProtobuf('article/delete/' + article.id, this.encode(article));
  }
}
