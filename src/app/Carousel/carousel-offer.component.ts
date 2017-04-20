import { Component, Input } from '@angular/core';

@Component({
    selector: 'carousel-offer',
    template: `<div>
    <h3>This is festival season..</h3>
    <h4>{{msg}}</h4>
    <a href="">
    <img src={{url}} stye="width:40px;height:50px;" alt={{url}}>
    </a>
    </div>`,
    styleUrls: ['carousel.component.css']
})

export class CarouselOfferComponent {
    
    @Input() url: string;
    @Input() msg: string;

    constructor(){}
}