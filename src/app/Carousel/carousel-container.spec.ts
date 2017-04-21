import { async, ComponentFixture, TestBed, fakeAsync, inject, tick, getTestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';
;
import { CarouselContainer } from './carousel-container.component';

import { CarouselService } from './carousel.service';
import { CarouselModule } from './carousel.module';
import { dummyResponse } from '../../testing/dummyResponse';

let carouselContainerComp: CarouselContainer;
let careouselFixture: ComponentFixture<CarouselContainer>;
let carouselServiceSpy: CarouselServiceSpy;
/* **************Test Description for CarouselContainerComponent and CarouselModule **********/

describe('CarouserContainerComponent and Carousel Module ', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CarouselModule]
    })
      .overrideModule(CarouselModule, {
        set: {
          providers: [
            { provide: CarouselService, useClass: CarouselServiceSpy }
          ]
        }
      })
      .compileComponents();
  }))

  beforeEach(() => {
    careouselFixture = TestBed.createComponent(CarouselContainer);
    carouselContainerComp = careouselFixture.componentInstance;
    carouselServiceSpy = careouselFixture.debugElement.injector.get(CarouselService);
  });


  carouselTest();
})


//Spec for Carousel Component
function carouselTest() {
  it('should create Carousel Component', () => {
    expect(carouselContainerComp).not.toBeNull();
  });

  it('should call service for getting slides and valid response', fakeAsync(() => {

    carouselContainerComp.addNewSlide();

    tick(); // wait for async save to complete
  expect(carouselServiceSpy.testResponse.responseObj[0].image).toBe('/assets/images/dest1.png');

  }));

}
class CarouselServiceSpy {
  testResponse = dummyResponse;

  getCarouselResources = jasmine.createSpy('getCarouselResources').and.callFake(
    () => Promise
      .resolve(true)
      .then(() => Object.assign({}, this.testResponse))
  );

}