import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { QuestionRoutingModule } from './question-routing.module';
import { QuestionListComponent } from './list/list.component';
import { QuestionViewComponent } from './view/view.component';
import { QuestionEditComponent } from './edit/edit.component';

const COMPONENTS = [
  QuestionListComponent,
  QuestionEditComponent];
const COMPONENTS_NOROUNT = [
  QuestionViewComponent];

@NgModule({
  imports: [
    SharedModule,
    QuestionRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class QuestionModule { }
