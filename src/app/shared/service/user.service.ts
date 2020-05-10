import { Injectable } from '@angular/core';
// import { CommonService } from '@shared';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { com } from '@shared';
import User = com.xueershangda.tianxun.user.model.User;
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CommonService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  encode(user: User): ArrayBufferLike {
    const body = User.encode(user).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  save(user: User): Observable<ArrayBuffer> {
    return this.postProtobuf('user/add', this.encode(user));
  }

  list(user: User): Observable<ArrayBuffer> {
    return this.postProtobuf('user/list', this.encode(user));
  }

  get(id: string): Observable<ArrayBuffer> {
    return this.getArrayBuffer('user/detail/' + id);
  }
}
