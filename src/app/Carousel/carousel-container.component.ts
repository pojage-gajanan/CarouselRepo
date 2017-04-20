
import { Component } from '@angular/core';
import { CarouselService } from './carousel.service';
@Component({
    selector: 'carousel-cmp',
    templateUrl: './carousel-container.html',
    styleUrls: ['carouselstyle.css'],
    providers: [CarouselService]
})
export class CarouselContainer {

    private NextPhotoInterval: number = 3000;

    private noLoopSlides: boolean = false;

    private slides: Array<any> = [];

    constructor(private carouselService: CarouselService) {
        this.addNewSlide();
    }

    private addNewSlide() {
       // this.carouselService.getCarouselResources().subscribe((res) => this.slides = res.responseObj);
         this.slides.push(
            {image:'/assets/images/dest1.png',offer:'/assets/images/socia1.png',msg:"You can get this first offer"},
            {image:'/assets/images/dest2.png',offer:'/assets/images/socia2.png',msg:"You can get this second offer"},
            {image:'/assets/images/dest3.png',offer:'/assets/images/socia3.png' ,msg:"You can get this third offer"},
            {image:'/assets/images/dest4.png',offer:'/assets/images/socia4.png',msg:"You can get this fourth offer"}

        );
    }

    private removeLastSlide() {
        this.slides.pop();
    }
}