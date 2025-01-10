import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DuelPage } from './duel.page';

describe(DuelPage.name, () => {

  const createTab = (title: string): {icon: string, label: string} => {
    const tab = fixture.nativeElement.querySelector(`ion-tab-button[tab="${title}"]`);
    const label = tab.querySelector('ion-label').innerHTML.replace('<!---->', '');
    const icon = tab.querySelector('ion-icon').getAttribute('name');
    return { icon, label};
  };

  let component: DuelPage;
  let fixture: ComponentFixture<DuelPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DuelPage],
      imports: [
        IonicModule.forRoot(),
        RouterModule.forRoot([]),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(DuelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the TabsPage component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the ion-tab-bar', () => {
    const tabBar = fixture.nativeElement.querySelector('ion-tab-bar');
    expect(tabBar).toBeTruthy();
  });

  it('should render three tab buttons', () => {
    const tabButtons = fixture.nativeElement.querySelectorAll('ion-tab-button');
    expect(tabButtons.length).toBe(3);
  });

  it('should render the "Battle" tab with correct icon and label', () => {
    const battleTab = createTab('battle');
    expect(battleTab).toBeTruthy();
    expect(battleTab.icon).toBe('game-controller');
    expect(battleTab.label).toBe('Battle');
  });

  it('should render the "Graveyard" tab with correct icon and label', () => {
    const graveyardTab = createTab('graveyard');
    expect(graveyardTab).toBeTruthy();
    expect(graveyardTab.icon).toBe('skull');
    expect(graveyardTab.label).toBe('Graveyard');
  });

  it('should render the "Banned" tab with correct icon and label', () => {
    const bannedTab = createTab('banned');
    expect(bannedTab).toBeTruthy();
    expect(bannedTab.icon).toBe('ban');
    expect(bannedTab.label).toBe('Banned');
  });

});
