import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';
import { JsUtils } from '@shared';
// import { ArticleService } from '@shared';
import { com } from '@shared';
import ArticleReply = com.xueershangda.tianxun.article.model.ArticleReply;
import { ArticleService } from '../../../shared/service/article.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './edit.component.html',
})
export class ArticleEditComponent implements OnInit {
  id = this.route.snapshot.params.id; // 在这里获取路由参数信息，ngOnInit中可以直接获取到
  i: any;
  title = '';
  schema: SFSchema = {
    properties: {
      id: { type: 'string', title: '编号' },
      authorName: { type: 'string', title: '作者', maxLength: 15 },
      callNo: { type: 'number', title: '调用次数' },
      href: { type: 'string', title: '链接', format: 'uri' },
      description: { type: 'string', title: '描述', maxLength: 140 },
      content: { type: 'string', title: '内容' }
    },
    required: ['authorName', 'callNo', 'href', 'description'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 }
    },
    $id: {
      widget: 'text'
    },
    $href: {
      widget: 'string'
    },
    $description: {
      widget: 'textarea',
      grid: { span: 24 }
    },
    $content: {
      widget: 'md',
      grid: { span: 24 },
      // 配置markdown工具栏
      // options: {},
      // markdown内容发生变化
      change: (md: string) => {
        alert(md);
      }
    },
  };

  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private msgSrv: NzMessageService,
    public http: _HttpClient,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    // 如果id不为空，则是编辑，否则是新增。对于文章，因为是富文本，这里是否有必要做编辑和新增啊。那样的话，还需要富文本编辑器！
    if (JsUtils.isNotBlank(this.id)) { // 这个是连接跳转过来的，record是空的
      // ${this.record.id}中record不存在的，是i
      // this.http.get(`/user/${this.i.id}`).subscribe(res => (this.i = res));
      this.articleService.get(this.id).subscribe(result => {
        const uint8Array = new Uint8Array(result, 0, result.byteLength);
        const reply = ArticleReply.decode(uint8Array);
        if (reply.code === 1) {
          this.i = reply.data[0]; // data是一个数组
          this.title = `编辑文章 ${this.id} 的信息`
        } else {
          this.msgSrv.info(reply.message);
        }
      });
    } else {
      this.title = '新建文章';
    }
  }

  save(value: any) {
    this.http.post(`/user/${this.i.id}`, value).subscribe(res => {
      this.msgSrv.success('保存成功');
      // 应该是模板使用错误，应该使用非modal mode template生成代码，但是本文件的代码还是modal的模板生成的，找不到modal
      // this.modal.close(true);
    });
  }
}
