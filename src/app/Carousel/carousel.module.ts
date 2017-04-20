import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { PlanBookComponent } from './planBook.component';
import { CarouselContainer }   from './carousel-container.component';
import { Carousel } from './carousel.component';
import { Slide } from './slide.component';
import {CarouselOfferComponent} from './carousel-offer.component';

@NgModule({
    declarations: [ CarouselContainer,Carousel,Slide,PlanBookComponent,CarouselOfferComponent],
    imports: [CommonModule,ReactiveFormsModule,
HttpModule,
     FormsModule],
     exports:[CarouselContainer],
    providers: []
})
export class CarouselModule { }