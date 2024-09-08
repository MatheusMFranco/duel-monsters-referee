import { FormsModule } from '@angular/forms';
import { 
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';

import wrongUsersMock from './wrong-users.mock';
import correctUsersMock from './correct-users.mock';

describe(LoginPage.name, () => {

  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  
  const toggleMock = (checked: boolean) => new CustomEvent<{checked: boolean}>('ionic', {
    detail: { checked },
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    localStorage.removeItem(component['EMAIL_KEY']);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`${LoginPage.prototype.login.name} should throw when called wrong email or password`, () => {
    wrongUsersMock.forEach(({email, password}) => {
      component.user = email;
      component.password = password;
      fixture.detectChanges();
      expect(() => component.login())
        .withContext(`Wrong value: Email ${component.user} | Password ${component.password}`)
        .toThrow();
    });
  });

  it(`should initiate with positive color`, () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.colorMode).toBe('success');
  });

  it(`should initiate with email blank`, () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.user).toBe('');
  });

  it(`should initiate with password blank`, () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.password).toBe('');
  });

  it(`should initiate with remains toggle as false`, () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.userRemains).toBeFalse();
  });

  it(`should initiate with remains toggle as true`, () => {
    const email = correctUsersMock[0].email;
    localStorage.setItem(component['EMAIL_KEY'], email);
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.user).toBe(email);
    expect(component.userRemains).toBeTrue();
  });

  it(`should call ${LoginPage.prototype['checkRemain'].name} when logs in`, () => {
    const { email, password } = correctUsersMock[0];
    component.user = email;
    component.password = password;
    fixture.detectChanges();
    spyOn(component, 'checkRemain' as any);
    component.login();
    expect(component['checkRemain']).toHaveBeenCalled();
  });

  it(`should check userRemains`, () => {
    component.remainEmail(toggleMock(true));
    fixture.detectChanges();
    expect(component.userRemains).toBeTrue();
  });

  it(`should uncheck userRemains`, () => {
    component.remainEmail(toggleMock(false));
    fixture.detectChanges();
    expect(component.userRemains).toBeFalse();
  });

  it(`should fields change to danger when email is invalid`, () => {
    component.user = wrongUsersMock[0].email;
    fixture.detectChanges();
    component.fieldChange();
    expect(component.colorMode).toBe('danger');
  });

  it(`should fields change to danger when password is invalid`, () => {
    component.password = wrongUsersMock[0].password;
    fixture.detectChanges();
    component.fieldChange();
    expect(component.colorMode).toBe('danger');
  });

  it(`should fields change to success when password and email is valid`, () => {
    component.user = correctUsersMock[0].email;
    component.password = correctUsersMock[0].password;
    fixture.detectChanges();
    component.fieldChange();
    expect(component.colorMode).toBe('success');
  });

  it(`should password be invalid`, () => {
    component.password = wrongUsersMock[0].password;
    fixture.detectChanges();
    expect(component.isPasswordInvalid).toBeTrue();
  });

  it(`should email be invalid`, () => {
    component.user = wrongUsersMock[0].email;
    fixture.detectChanges();
    expect(component.isEmailInvalid).toBeTrue();
  });

  it(`should password be valid`, () => {
    component.password = correctUsersMock[0].password;
    fixture.detectChanges();
    expect(component.isPasswordInvalid).toBeFalse();
  });

  it(`should email be valid`, () => {
    component.user = correctUsersMock[0].email;
    fixture.detectChanges();
    expect(component.isEmailInvalid).toBeFalse();
  });

  it(`should set email on storage`, () => {
    component.userRemains = true;
    component.user = correctUsersMock[0].email;
    fixture.detectChanges();
    component['checkRemain']();
    expect(localStorage.getItem(component['EMAIL_KEY'])).toBeTruthy();
  });

  it(`should remove email on storage`, () => {
    component.userRemains = false;
    fixture.detectChanges();
    component['checkRemain']();
    expect(localStorage.getItem(component['EMAIL_KEY'])).toBeFalsy();
  });

});
