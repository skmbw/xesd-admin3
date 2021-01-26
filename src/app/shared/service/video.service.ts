import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { com } from '@shared';
import Video = com.xueershangda.tianxun.video.model.Video;
import VideoReply = com.xueershangda.tianxun.video.model.VideoReply;

@Injectable({
  providedIn: 'root'
})
export class VideoService extends CommonService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  saveOrUpdate(video: Video): Observable<ArrayBuffer> {
    if (video.update === 1) {
      return this.postProtobuf('video/add', this.encodeVideo(video));
    } else if (video.update === 2) {
      return this.postProtobuf('video/update', this.encodeVideo(video));
    } else { // 这个也可以delete，没必要
      const reply = new VideoReply();
      reply.code = -10;
      reply.message = 'update field error.';
      const writer = VideoReply.encode(reply);
      const uint8Array = writer.finish();
      return of(uint8Array);
    }
  }

  list(video: Video): Observable<ArrayBuffer> {
    return this.postProtobuf('video/list', this.encodeVideo(video));
  }

  get(id: string): Observable<ArrayBuffer> {
    return this.getArrayBuffer('video/detail/' + id);
  }
}
