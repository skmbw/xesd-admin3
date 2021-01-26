import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherListComponent } from './list/list.component';
import { TeacherViewComponent } from './view/view.component';
import { TeacherEditComponent } from './edit/edit.component';

const routes: Routes = [

  { path: 'list', component: TeacherListComponent },
  { path: 'view', component: TeacherViewComponent },
  { path: 'edit', component: TeacherEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
