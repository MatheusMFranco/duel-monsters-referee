import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GraveyardPage } from './graveyard.page';
import graveyardCardsMock from './graveyard-cards.mock';

describe(GraveyardPage.name, () => {
  let component: GraveyardPage;
  let fixture: ComponentFixture<GraveyardPage>;
  const ELEMENTS_THAT_IS_NOT_AN_ITEM = 2;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GraveyardPage],
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(GraveyardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the GraveyardPage component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of cards defined', () => {
    expect(component.cards).toBeDefined();
    expect(component.cards.length).toBeGreaterThan(0);
  });

  it('should render the correct number of card titles', () => {
    const cardElements = fixture.nativeElement.querySelectorAll('ion-title');
    expect(cardElements.length).toBe(graveyardCardsMock.length + ELEMENTS_THAT_IS_NOT_AN_ITEM);
  });

  it('should render card titles with correct content', () => {
    const cardElements = fixture.nativeElement.querySelectorAll('ion-title');
    graveyardCardsMock.forEach((card, index) => {
      expect(cardElements[index + ELEMENTS_THAT_IS_NOT_AN_ITEM].innerHTML).toContain(card);
    });
  });

  it('should render the page header with title "Graveyard"', () => {
    const headerTitle = fixture.nativeElement.querySelector('ion-toolbar ion-title');
    expect(headerTitle).toBeTruthy();
    expect(headerTitle.innerHTML).toBe('Graveyard');
  });
});
