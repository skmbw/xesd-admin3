import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ClassroomRoutingModule } from './classroom-routing.module';
import { ClassroomViewComponent } from './view/view.component';
import { ClassroomListComponent } from './list/list.component';
import { ClassroomEditComponent } from './edit/edit.component';

const COMPONENTS = [
  ClassroomViewComponent,
  ClassroomListComponent,
  ClassroomEditComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    ClassroomRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
})
export class ClassroomModule { }
