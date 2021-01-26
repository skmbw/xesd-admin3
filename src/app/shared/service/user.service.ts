import { Injectable } from '@angular/core';
// import { CommonService } from '@shared';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { com } from '@shared';
import { CommonService } from './common.service';
import User = com.xueershangda.tianxun.user.model.User;

@Injectable({
  providedIn: 'root'
})
export class UserService extends CommonService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  save(user: User): Observable<ArrayBuffer> {
    return this.postProtobuf('user/add', this.encodeUser(user));
  }

  list(user: User): Observable<ArrayBuffer> {
    return this.postProtobuf('user/list', this.encodeUser(user));
  }

  get(id: string): Observable<ArrayBuffer> {
    return this.getArrayBuffer('user/detail/' + id);
  }
}
