import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CarouselModule} from './Carousel/carousel.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,CarouselModule
  ],
  providers: [],
  bootstrap:[AppComponent]
 
})
export class AppModule { }



