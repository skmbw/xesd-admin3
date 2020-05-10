import { Component, OnInit } from '@angular/core';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { ActivatedRoute } from '@angular/router';
// import { ArticleService } from '@shared';
import { com } from '@shared';
import ArticleReply = com.xueershangda.tianxun.article.model.ArticleReply;
import { ArticleService } from '../../../shared/service/article.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './view.component.html',
})
export class ArticleViewComponent implements OnInit {
  record: any = {}; // 不知道这里能够接收到参数？
  i: any; // 页面显示，使用的数据
  id = this.route.snapshot.params.id; // 这里肯定是能拿到的

  constructor(
    private modal: NzModalRef,
    public msgSrv: NzMessageService,
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.http.get(`/user/${this.record.id}`).subscribe(res => this.i = res);
    this.i = {'id': this.id};
    this.articleService.get(this.record.id).subscribe(result => {
      const uint8Array = new Uint8Array(result, 0, result.byteLength);
      const reply = ArticleReply.decode(uint8Array);
      if (reply.code === 1) {
        this.i = reply.data;
      } else {
        this.msgSrv.info(reply.message);
      }
    });
  }

  close() {
    this.modal.destroy();
  }
}
