import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CourseRoutingModule } from './course-routing.module';
import { CourseViewComponent } from './view/view.component';
import { CourseListComponent } from './list/list.component';
import { CourseEditComponent } from './edit/edit.component';
import { CourseSubjectListComponent } from './subject-list/subject-list.component';
import { CourseSubjectAddComponent } from './subject-add/subject-add.component';

const COMPONENTS = [
  CourseViewComponent,
  CourseListComponent,
  CourseEditComponent,
  CourseSubjectListComponent];
const COMPONENTS_NOROUNT = [
  
  CourseSubjectAddComponent];

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
