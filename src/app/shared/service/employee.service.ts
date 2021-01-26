import { Injectable } from '@angular/core';
// import { CommonService } from '@shared';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { com } from '@shared';
import { CommonService } from './common.service';
import Employee = com.xueershangda.tianxun.employee.model.Employee;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends CommonService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  login(employee: Employee): Observable<ArrayBuffer> {
    return super.postProtobuf("employee/login", this.encodeEmployee(employee));
  }
}
