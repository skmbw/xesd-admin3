import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { com, JsUtils } from '@shared';
import Exercise = com.xueershangda.tianxun.classroom.model.Exercise;

@Injectable({
  providedIn: 'root'
})
export class ExerciseService extends CommonService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  list(exercise: Exercise): Observable<ArrayBuffer> {
    return this.postProtobuf('exercise/list', this.encodeExercise(exercise));
  }

  add(exercise: Exercise): Observable<ArrayBuffer> {
    if (JsUtils.isNotBlank(exercise.id)) {
      return this.postProtobuf('exercise/update', this.encodeExercise(exercise));
    } else {
      return this.postProtobuf('exercise/doAdd', this.encodeExercise(exercise));
    }
  }

  delete(exercise: Exercise): Observable<ArrayBuffer> {
    return this.postProtobuf('exercise/delete', this.encodeExercise(exercise));
  }

  get(id: string): Observable<ArrayBuffer> {
    const exercise = new Exercise();
    exercise.id = id;
    return this.postProtobuf('exercise/detail', this.encodeExercise(exercise));
  }
}
