import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { PlanBookComponent } from './PlanBook/carousel-planBook.component';
import { CarouselContainer } from './carousel-container.component';
import { Carousel } from './carousel.component';
import { Slide } from './slide.component';
import { CarouselOfferComponent } from './carousel-offer.component';

@NgModule({
    declarations: [CarouselContainer, Carousel, Slide, PlanBookComponent, CarouselOfferComponent],
    imports: [CommonModule,HttpModule],
    exports: [CarouselContainer],
    providers: []
})
export class CarouselModule { }