import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { QuestionbankRoutingModule } from './questionbank-routing.module';
import { QuestionbankEditComponent } from './edit/edit.component';
import { QuestionbankViewComponent } from './view/view.component';
import { QuestionbankListComponent } from './list/list.component';
import { QuestionbankPaperComponent } from './paper/paper.component';
import { QuestionbankExerciseComponent } from './exercise/exercise.component';

const COMPONENTS = [
  QuestionbankEditComponent,
  QuestionbankViewComponent,
  QuestionbankListComponent,
  QuestionbankExerciseComponent,
  QuestionbankPaperComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    QuestionbankRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
  ],
})
export class QuestionbankModule { }
