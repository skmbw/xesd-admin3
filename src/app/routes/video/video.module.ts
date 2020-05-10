import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { VideoRoutingModule } from './video-routing.module';
import { VideoListComponent } from './list/list.component';
import { VideoEditComponent } from './edit/edit.component';
import { VideoViewComponent } from './view/view.component';

const COMPONENTS = [
  VideoListComponent,
  VideoEditComponent];
const COMPONENTS_NOROUNT = [
  VideoViewComponent];

@NgModule({
  imports: [
    SharedModule,
    VideoRoutingModule,
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
  ],
  entryComponents: COMPONENTS_NOROUNT,
})
export class VideoModule {
}
