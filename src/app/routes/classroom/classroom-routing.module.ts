import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassroomViewComponent } from './view/view.component';
import { ClassroomListComponent } from './list/list.component';
import { ClassroomEditComponent } from './edit/edit.component';

const routes: Routes = [

  { path: 'view', component: ClassroomViewComponent },
  { path: 'list', component: ClassroomListComponent },
  { path: 'edit', component: ClassroomEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomRoutingModule { }
