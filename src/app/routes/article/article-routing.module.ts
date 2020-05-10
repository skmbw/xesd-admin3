import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './list/list.component';
import { ArticleEditComponent } from './edit/edit.component';

const routes: Routes = [

  { path: 'list', component: ArticleListComponent },
  { path: 'edit/:id', component: ArticleEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
