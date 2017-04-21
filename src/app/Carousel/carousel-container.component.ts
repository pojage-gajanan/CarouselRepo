
import { Component } from '@angular/core';
import { CarouselService } from './carousel.service';

@Component({
    selector: 'carousel-cmp',
    templateUrl: './carousel-container.html',
    styleUrls: ['./carousel.component.scss'],
    providers: [CarouselService]
})

export class CarouselContainer {

    private NextPhotoInterval: number = 3000;
    private noLoopSlides: boolean = false;
    private slides: Array<any> = [];
    private errorMessage: string;

    constructor(private carouselService: CarouselService) {
        this.addNewSlide();
    }

    public addNewSlide() {
        this.carouselService.getCarouselResources().subscribe((res) => this.slides = res.responseObj,
          error => this.errorMessage = <any>error);
    }

    private removeLastSlide() {
        this.slides.pop();
    }
}