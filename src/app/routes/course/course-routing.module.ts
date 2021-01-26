import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseViewComponent } from './view/view.component';
import { CourseListComponent } from './list/list.component';
import { CourseEditComponent } from './edit/edit.component';

const routes: Routes = [

  { path: 'view', component: CourseViewComponent },
  { path: 'list', component: CourseListComponent },
  { path: 'edit', component: CourseEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
