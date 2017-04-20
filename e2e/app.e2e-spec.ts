import { CarrouselPage } from './app.po';

describe('carrousel App', () => {
  let page: CarrouselPage;

  beforeEach(() => {
    page = new CarrouselPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
