import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraveyardPage } from './graveyard.page';

describe('GraveyardPage', () => {
  let component: GraveyardPage;
  let fixture: ComponentFixture<GraveyardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GraveyardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
