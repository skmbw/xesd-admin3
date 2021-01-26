import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { SpecialRoutingModule } from './special-routing.module';
import { SpecialListComponent } from './list/list.component';
import { SpecialViewComponent } from './view/view.component';

const COMPONENTS = [
  SpecialListComponent,
  SpecialViewComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    SpecialRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
})
export class SpecialModule { }
