import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponent } from './list/list.component';
import { VideoEditComponent } from './edit/edit.component';

const routes: Routes = [

  { path: 'list', component: VideoListComponent },
  { path: 'edit', component: VideoEditComponent },
  { path: 'edit/:id', component: VideoEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoRoutingModule {
}
