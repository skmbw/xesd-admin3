import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService extends CommonService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }
}