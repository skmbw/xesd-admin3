import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesViewComponent } from './view/view.component';
import { ClassesListComponent } from './list/list.component';
import { ClassesEditComponent } from './edit/edit.component';
import { ClassesGradeAddComponent } from './grade-add/grade-add.component';
import { ClassesGradeListComponent } from './grade-list/grade-list.component';

const COMPONENTS = [
  ClassesViewComponent,
  ClassesListComponent,
  ClassesEditComponent,
  ClassesGradeListComponent];
const COMPONENTS_NOROUNT = [
  ClassesGradeAddComponent];

@NgModule({
  imports: [
    SharedModule,
    ClassesRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
})
export class ClassesModule { }
