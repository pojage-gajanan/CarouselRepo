import { Component, Input } from '@angular/core';

@Component({
    selector: 'carousel-offer',
    template: `<div>
    <h3>This is festival season..</h3>
    <h4>{{msg}}</h4>
    <a href="">
    <img src={{url}} alt={{url}}>
    </a>
    </div>`,
    styleUrls: ['carousel.component.scss']
})

export class CarouselOfferComponent {
    
    @Input() url: string;
    @Input() msg: string;

    constructor(){}
}