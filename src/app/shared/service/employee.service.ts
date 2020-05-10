import { Injectable } from '@angular/core';
// import { CommonService } from '@shared';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { com } from '@shared';
import Employee = com.xueershangda.tianxun.employee.model.Employee;
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends CommonService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  encode(employee: Employee): ArrayBufferLike {
    const body = Employee.encode(employee).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  login(employee: Employee): Observable<ArrayBuffer> {
    return super.postProtobuf("employee/login", this.encode(employee));
  }
}
