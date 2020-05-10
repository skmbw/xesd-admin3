import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsUtils } from '@shared';

/**
 * 公共服务的一些抽象啊
 */
export class CommonService {

  constructor(private http: HttpClient) {
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**
   * 以表单方式提交，返回 ArrayBuffer
   * @param {string} url
   * @param body
   * @returns {Observable<JsonBean>}
   */
  postFormProtobuf(url: string, body: any): Observable<ArrayBuffer> {
    const params = JsUtils.toKeyValue(body);
    return this.http.post(url, params, {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}),
      responseType: 'arraybuffer'
    });
  }

  /**
   * 以表单方式get查询，返回 ArrayBuffer
   * @param {string} url
   * @returns {Observable<ArrayBuffer>}
   */
  getArrayBuffer(url: string): Observable<ArrayBuffer> {
    return this.http.get(url, {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}),
      responseType: 'arraybuffer'
    });
  }

  postProtobuf(url: string, body: any): Observable<ArrayBuffer> {
    return this.http.post(url, body, {
      headers: new HttpHeaders({'Content-Type': 'application/x-protobuf;charset=utf-8'}),
      responseType: 'arraybuffer'
    });
  }

  /**
   * 使用es6的FormData的方式，上传文件和普通表单域
   * @param {string} url
   * @param {FormData} formData
   * @returns {Observable<any>}
   */
  postFormJson(url: string, formData: FormData): Observable<any> {
    return this.http.post(url, formData, {
      headers: new HttpHeaders({'Content-Type': 'multipart/form-data;charset=utf-8;boundary=skmbw_mp_' + (Math.random() * 10)}),
      responseType: 'json'
    });
  }

  /**
   * 使用es6的FormData的方式，上传文件和普通表单域，返回protobuf的数据
   * @param {string} url
   * @param {FormData} formData
   * @returns {Observable<ArrayBuffer>}
   */
  uploadProtobuf(url: string, formData: FormData): Observable<ArrayBuffer> {
    return this.http.post(url, formData, {
      headers: new HttpHeaders({'Content-Type': 'multipart/form-data;charset=utf-8;boundary=skmbw_mp_' + (Math.random() * 10)}),
      responseType: 'arraybuffer'
    });
  }
}
