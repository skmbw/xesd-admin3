import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherListComponent } from './list/list.component';
import { TeacherViewComponent } from './view/view.component';
import { TeacherEditComponent } from './edit/edit.component';

const COMPONENTS = [
  TeacherListComponent,
  TeacherViewComponent,
  TeacherEditComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    TeacherRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
})
export class TeacherModule { }
