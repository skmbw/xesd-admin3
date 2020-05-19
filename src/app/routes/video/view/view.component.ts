import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
// import { VideoService } from '@shared';
import { com } from '@shared';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { VideoService } from '../../../shared/service/video.service';
import VideoReply = com.xueershangda.tianxun.video.model.VideoReply;
import IVideo = com.xueershangda.tianxun.video.model.IVideo;

@Component({
  selector: 'app-video-view',
  templateUrl: './view.component.html',
})
export class VideoViewComponent implements OnInit {
  record: any = {};
  i: IVideo;

  constructor(
    private modal: NzModalRef,
    public msgSrv: NzMessageService,
    public http: _HttpClient,
    private videoService: VideoService
  ) { }

  ngOnInit(): void {
    this.videoService.get(this.record.id).subscribe(res => {
      const uint8Array = new Uint8Array(res, 0, res.byteLength);
      const reply = VideoReply.decode(uint8Array);
      if (reply.code === 1) {
        this.i = reply.video;
      } else {
        this.msgSrv.info(reply.message);
      }
    });
  }

  close() {
    this.modal.destroy();
  }
}
