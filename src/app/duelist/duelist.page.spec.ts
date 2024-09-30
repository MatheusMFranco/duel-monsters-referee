import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DuelistPage } from './duelist.page';

describe('DuelistPage', () => {
  let component: DuelistPage;
  let fixture: ComponentFixture<DuelistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DuelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
