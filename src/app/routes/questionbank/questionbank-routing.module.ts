import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionbankEditComponent } from './edit/edit.component';
import { QuestionbankViewComponent } from './view/view.component';
import { QuestionbankListComponent } from './list/list.component';
import { QuestionbankPaperComponent } from './paper/paper.component';
import { QuestionbankExerciseComponent } from './exercise/exercise.component';

const routes: Routes = [

  { path: 'edit', component: QuestionbankEditComponent },
  { path: 'view', component: QuestionbankViewComponent },
  { path: 'list', component: QuestionbankListComponent },
  { path: 'exercise', component: QuestionbankExerciseComponent },
  { path: 'paper', component: QuestionbankPaperComponent },
  // { path: 'addtopaper', component: QuestionbankAddtopaperComponent },
  // { path: 'addtopaper/:id', component: QuestionbankAddtopaperComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionbankRoutingModule { }
