import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleViewComponent } from './view/view.component';
import { ArticleListComponent } from './list/list.component';
import { ArticleEditComponent } from './edit/edit.component';

const COMPONENTS = [
  ArticleListComponent,
  ArticleEditComponent];
// 使用modal mode的页面，是不需要路由的
const COMPONENTS_NOROUNT = [
  ArticleViewComponent];

@NgModule({
  imports: [
    SharedModule,
    ArticleRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class ArticleModule { }
