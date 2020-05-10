import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STData } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { VideoViewComponent } from '../view/view.component';
// import { VideoEditComponent } from '../edit/edit.component';
// import { VideoService } from '@shared';
import { com } from '@shared';
import { Consts } from '@shared';
import { ToastrService } from 'ngx-toastr';
import Video = com.xueershangda.tianxun.video.model.Video;
import VideoReply = com.xueershangda.tianxun.video.model.VideoReply;
import { Router } from '@angular/router';
import { VideoService } from '../../../shared/service/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './list.component.html',
})
export class VideoListComponent implements OnInit {
  url: STData[] = [];
  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号',
      },
    },
  };
  @ViewChild('st') st: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '标题', index: 'title' },
    { title: '分类', index: 'category' },
    {
      title: '封面',
      type: 'img',
      index: 'image',
      // format: (item: STData, col: STColumn) => {
      //   return Consts.IMAGE_HOST + item.image;
      // }
    },
    { title: '时间', type: 'date', index: 'createDate' },
    {
      title: '',
      buttons: [
        {
          text: '查看',
          // 如果在click中打开modal，那么type是不需要指定的
          // type: 'static', // static（点击蒙层不关闭）和modal（点击蒙层关闭modal）的区别
          // component: VideoListViewComponent,
          // modal: {params: {'id': 322}, paramsName: 'record'},
          click: (item: any) => {
            this.modal
              // static的modal点击蒙层，不会关闭modal
              // 这个参数名有两个一个是i，一个是record
              .createStatic(VideoViewComponent, { record: item })
              .subscribe(() => this.st.reload());
          },
        },
        {
          // 这种方式打开modal为什么不能正确的传递参数呢？因为bug，没有取modal这个参数，导致参数名是undefined。
          // 默认传递的参数是该行记录。
          text: '编辑',
          type: 'link',
          click: (item: any) => `/video/edit/${item.id}`,
          // click: (item: any) => {
          //   this.router.navigateByUrl(`video/edit/${item.id}`).catch();
            // this.router.navigate(['video/add'], {queryParams: {'id': `${item.id}`}}).catch()
          // },
          // type: 'static',
          // component: VideoEditComponent // 默认将当前行记录record传进去作为参数
          // 这个参数没有使用，是一个bug，在@delon/abc/fesm5/table.js._btnClick（1978行）中，根本没有判断paramsName是否为空
          // @delon/abc/fesm2015/table.js._btnClick（2215行）中也要修改。8.3版本
          // 我对源码做了改动，可以使用了，暂时还是不建议使用这个方式，使用click的方式也是OK的，自己创建modal。
          // modal: {
          //   params: (record: STData) => { // 这个参数是一个函数，会将数据进行处理然后返回，这里直接返回即可。
          //     if (record === null || record === undefined) {
          //       record = {};
          //     }
          //     record.id = 234;
          //     record.name = 'yinlei';
          //     return record;
          //   }, 'paramsName': 'record'}
          // click: (item: any) => item
        },
      ],
    },
  ];

  constructor(
    private toastr: ToastrService,
    private modal: ModalHelper,
    private videoService: VideoService,
    private router: Router,
  ) {}

  ngOnInit() {
    const video = new Video();
    video.page = 1;
    video.pageSize = 20;
    this.videoService.list(video).subscribe(result => {
      const uint8Array = new Uint8Array(result, 0, result.byteLength);
      const reply = VideoReply.decode(uint8Array);
      if (reply.code === 1) {
        for (const v of reply.data) {
          // 渲染的时候，不能加url前缀，这里处理一下
          v.image = Consts.IMAGE_HOST + v.image;
        }
        this.url = reply.data as STData[];
      } else {
        this.toastr.success(reply.message);
      }
    });
  }

  add() {
    this.router.navigateByUrl('video/edit').catch();
    // this.modal
    //   .createStatic(VideoEditComponent, { i: { id: '' } }) // id 初始化为空
    //   .subscribe(() => this.st.reload());
  }
}
