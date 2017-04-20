import {  ComponentFixture, TestBed,async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
import {CarouselModule} from './Carousel/carousel.module';


let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent & AppModule', () => {

 beforeEach( async(() => {
    TestBed.configureTestingModule({
     declarations:[AppComponent],
     imports: [ CarouselModule ],
    })
    .compileComponents(); // compile template and css
  }));
 beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp    = fixture.componentInstance;
   

    fixture.detectChanges(); // trigger initial data binding
  });

  // fixture.detectChanges();
 it('should create the app component with carousel Component in it', () => {
    expect(comp).not.toBeNull();
  });
   })