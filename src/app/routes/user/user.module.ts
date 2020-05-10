import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './list/list.component';
import { UserViewComponent } from './view/view.component';
import { UserEditComponent } from './edit/edit.component';

const COMPONENTS = [
  UserListComponent];
const COMPONENTS_NOROUNT = [
  UserViewComponent,
  UserEditComponent];

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class UserModule { }
