import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesViewComponent } from './view/view.component';
import { ClassesListComponent } from './list/list.component';
import { ClassesEditComponent } from './edit/edit.component';

const COMPONENTS = [
  ClassesViewComponent,
  ClassesListComponent,
  ClassesEditComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    ClassesRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
})
export class ClassesModule { }
