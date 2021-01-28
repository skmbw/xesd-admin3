import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesViewComponent } from './view/view.component';
import { ClassesListComponent } from './list/list.component';
import { ClassesEditComponent } from './edit/edit.component';
import { ClassesGradeListComponent } from './grade-list/grade-list.component';

const routes: Routes = [

  { path: 'view', component: ClassesViewComponent },
  { path: 'list', component: ClassesListComponent },
  { path: 'edit', component: ClassesEditComponent },
  { path: 'grade-list', component: ClassesGradeListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
