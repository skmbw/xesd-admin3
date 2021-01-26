import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CourseRoutingModule } from './course-routing.module';
import { CourseViewComponent } from './view/view.component';
import { CourseListComponent } from './list/list.component';
import { CourseEditComponent } from './edit/edit.component';

const COMPONENTS = [
  CourseViewComponent,
  CourseListComponent,
  CourseEditComponent];
const COMPONENTS_NOROUNT = [
  ];

@NgModule({
  imports: [
    SharedModule,
    CourseRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
})
export class CourseModule { }
