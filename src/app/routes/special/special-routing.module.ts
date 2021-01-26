import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialListComponent } from './list/list.component';
import { SpecialViewComponent } from './view/view.component';

const routes: Routes = [

  { path: 'list', component: SpecialListComponent },
  { path: 'view', component: SpecialViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialRoutingModule { }
