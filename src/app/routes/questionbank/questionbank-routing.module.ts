import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionbankEditComponent } from './edit/edit.component';
import { QuestionbankViewComponent } from './view/view.component';
import { QuestionbankListComponent } from './list/list.component';

const routes: Routes = [

  { path: 'edit', component: QuestionbankEditComponent },
  { path: 'view', component: QuestionbankViewComponent },
  { path: 'list', component: QuestionbankListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionbankRoutingModule { }
