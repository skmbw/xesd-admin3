import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { com, JsUtils } from '@shared';
import Employee = com.xueershangda.tianxun.employee.model.Employee;
import Article = com.xueershangda.tianxun.article.model.Article;
import Answer = com.xueershangda.tianxun.answer.model.Answer;
import Question = com.xueershangda.tianxun.question.model.Question;
import User = com.xueershangda.tianxun.user.model.User;
import Video = com.xueershangda.tianxun.video.model.Video;
import Course = com.xueershangda.tianxun.classroom.model.Course;
import Classes = com.xueershangda.tianxun.classroom.model.Classes;
import Teacher = com.xueershangda.tianxun.classroom.model.Teacher;
import QuestionBank = com.xueershangda.tianxun.classroom.model.QuestionBank;
import Special = com.xueershangda.tianxun.special.model.Special;
import Orders = com.xueershangda.tianxun.orders.model.Orders;
import Favorite = com.xueershangda.tianxun.user.model.Favorite;
import Comment = com.xueershangda.tianxun.comment.model.Comment;
import Equipment = com.xueershangda.tianxun.game.model.Equipment;
import Characters = com.xueershangda.tianxun.game.model.Characters;
import VirtualItems = com.xueershangda.tianxun.game.model.VirtualItems;
import Score = com.xueershangda.tianxun.score.model.Score;
import Search = com.xueershangda.tianxun.search.model.Search;
import Request = com.xueershangda.tianxun.common.model.Request;
import Grade = com.xueershangda.tianxun.classroom.model.Grade;

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

  encodeEmployee(employee: Employee): ArrayBufferLike {
    const body = Employee.encode(employee).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  encodeArticle(article: Article): ArrayBufferLike {
    const body = Article.encode(article).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  encodeAnswer(answer: Answer): ArrayBufferLike {
    const body = Answer.encode(answer).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  encodeQuestion(question: Question): ArrayBufferLike {
    const body = Question.encode(question).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  encodeUser(user: User): ArrayBufferLike {
    const body = User.encode(user).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  encodeVideo(video: Video): ArrayBufferLike {
    const body = Video.encode(video).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  encodeCourse(course: Course): ArrayBufferLike {
    const body = Course.encode(course).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  encodeClasses(classes: Classes): ArrayBufferLike {
    const body = Classes.encode(classes).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  encodeGrade(grade: Grade): ArrayBufferLike {
    const body = Grade.encode(grade).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  encodeTeacher(teacher: Teacher): ArrayBufferLike {
    const body = Teacher.encode(teacher).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  encodeQuestionBank(questionBank: QuestionBank): ArrayBufferLike {
    const body = QuestionBank.encode(questionBank).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  encodeSpecial(special: Special): ArrayBufferLike {
    const body = Special.encode(special).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  encodeRequest(request: Request): ArrayBufferLike {
    const body = Request.encode(request).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  encodeOrder(orders: Orders): ArrayBufferLike {
    const body = Orders.encode(orders).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  encodeComment(model: Comment): ArrayBufferLike {
    const body = Comment.encode(model).finish();
    // 这样可以数组复制，OK。直接操作内存，性能应该比循环快；待测
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  encodeFavorite(model: Favorite): ArrayBufferLike {
    const body = Favorite.encode(model).finish();
    // 这样可以数组复制，OK。直接操作内存，性能应该比循环快；待测
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  encodeEquipment(equip: Equipment): ArrayBufferLike {
    const body = Equipment.encode(equip).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  encodeChar(characters: Characters): ArrayBufferLike {
    const body = Characters.encode(characters).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  encodeVirtualItem(items: VirtualItems): ArrayBufferLike {
    const body = VirtualItems.encode(items).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  encodeScore(score: Score): ArrayBufferLike {
    const body = Score.encode(score).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }

  encodeSearch(search: Search): ArrayBufferLike {
    const body = Search.encode(search).finish();
    const int8Array = new Int8Array(body.byteLength);
    int8Array.set(body);
    return int8Array.buffer;
  }
}
