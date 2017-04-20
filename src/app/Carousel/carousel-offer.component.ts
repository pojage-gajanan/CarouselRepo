import {Component,Input} from '@angular/core';

@Component({
    selector: 'carousel-offer',
    template:`<div>Offer for you..
    <h3>This is festival season..</h3>
    <h4>{{msg}}</h4>
    <img src={{url}} stye="width:40px;height:50px;">
    </div>`,
     styleUrls: ['carouselstyle.css']
})
export class CarouselOfferComponent  {
 @Input() url: string;
 @Input () msg:string;
}