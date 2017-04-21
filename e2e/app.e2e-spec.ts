import { CarrouselPage } from './app.po';

describe('carrousel App', () => {
  let page: CarrouselPage;
   var beforeImage = "/assets/images/dest1.png";
    var afterImage = "/assets/images/dest2.png";
  beforeEach(() => {
    page = new CarrouselPage();
  });

  it('should have 4 slides for carousel ', () => {
    page.navigateTo();
 expect(page.getSlidesCount().count()).toEqual(4);
  });


 it('should have 2 controll buttons for carousel ', () => {
    page.navigateTo();
 expect(page.getControlButtonsCount().count()).toEqual(2);
  });

    it('should have 1 indicator for carousel ', () => {
    page.navigateTo();
 expect(page.getIndicatorsCount().count()).toEqual(1);
  });



    it('should have 1 indicator for carousel ', () => {
    page.navigateTo();
 expect(page.getIndicatorsCount().count()).toEqual(1);
  });

      it('should have first image followed by second one on clicking right control  ', () => {
    page.navigateTo();
    expect(page.getActiveImage().getAttribute('src')).toBe(beforeImage);
    page.getNextButton().click();
    expect(page.getActiveImage().getAttribute('src')).toBe(afterImage );
  });

       it('should have second image followed by first one on clicking left control  ', () => {
    page.navigateTo();
   page.getNextButton().click();
    expect(page.getActiveImage().getAttribute('src')).toBe(afterImage );
    page.getPreviousButton().click();
    expect(page.getActiveImage().getAttribute('src')).toBe(beforeImage);
  });

});
