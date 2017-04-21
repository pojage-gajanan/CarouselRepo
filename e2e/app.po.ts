import { browser, element, by } from 'protractor';

export class CarrouselPage {
  navigateTo() {
    return browser.get('/');
  }

   getSlidesCount(){
   return  element.all(by.css(".carousel-slider-img"));
  }

  getControlButtonsCount(){
   return  element.all(by.css(".carousel-control"));
  }

    getIndicatorsCount(){
   return  element.all(by.css(".carousel-indicators"));
  }
   getPreviousButton(){
     return element(by.css('.left .carousel-control')); 
   }
      getNextButton(){
     return element(by.css('.right .carousel-control')); 
   }
       getActiveImage (){
     return element(by.css('slide.active')); 
   }
}
