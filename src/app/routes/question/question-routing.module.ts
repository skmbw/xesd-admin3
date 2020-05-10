import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionListComponent } from './list/list.component';
import { QuestionEditComponent } from './edit/edit.component';

const routes: Routes = [

  { path: 'list', component: QuestionListComponent },
  { path: 'edit/:id', component: QuestionEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
