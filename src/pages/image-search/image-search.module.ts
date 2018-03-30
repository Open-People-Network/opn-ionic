import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageSearchPage } from './image-search';

@NgModule({
  declarations: [
    ImageSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageSearchPage),
  ],
  exports:[
    ImageSearchPage
  ]
})
export class ImageSearchPageModule {}
