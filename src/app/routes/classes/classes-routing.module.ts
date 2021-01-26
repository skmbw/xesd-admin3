import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesViewComponent } from './view/view.component';
import { ClassesListComponent } from './list/list.component';
import { ClassesEditComponent } from './edit/edit.component';

const routes: Routes = [

  { path: 'view', component: ClassesViewComponent },
  { path: 'list', component: ClassesListComponent },
  { path: 'edit', component: ClassesEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
