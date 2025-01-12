import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPage } from './user.page';
import { SharedModule } from '../shared/shared.module';

describe('UserPage Component', () => {
  let component: UserPage;
  let fixture: ComponentFixture<UserPage>;
  let fb: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPage],
      imports: [ReactiveFormsModule, SharedModule],
      providers: [FormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(UserPage);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty fields', () => {
    expect(component.userForm.value).toEqual({
      name: '',
      email: '',
      emailConfirmation: '',
      password: '',
      passwordConfirmation: '',
      avatar: '',
    });
  });

  it('should mark the form as invalid when required fields are empty', () => {
    expect(component.userForm.invalid).toBeTrue();
  });

  it('should mark the form as valid when all required fields are correctly filled', () => {
    component.userForm.setValue({
      name: 'John Doe',
      email: 'john@example.com',
      emailConfirmation: 'john@example.com',
      password: 'password123',
      passwordConfirmation: 'password123',
      avatar: '',
    });

    expect(component.userForm.valid).toBeTrue();
  });

  it('should mark the form as invalid when email and emailConfirmation do not match', () => {
    component.userForm.patchValue({
      email: 'john@example.com',
      emailConfirmation: 'john.doe@example.com',
    });

    expect(component.userForm.invalid).toBeTrue();
    expect(component.userForm.errors).toEqual({ confirmedValidator: 'Passwords do not match.' });
  });

  it('should mark the form as invalid when password and passwordConfirmation do not match', () => {
    component.userForm.patchValue({
      password: 'password123',
      passwordConfirmation: 'password456',
    });

    expect(component.userForm.invalid).toBeTrue();
    expect(component.userForm.errors).toEqual({ confirmedValidator: 'Passwords do not match.' });
  });

  it('should return true for isFormInvalid when form is invalid', () => {
    expect(component.isFormInvalid).toBeTrue();
  });

  it('should return false for isFormInvalid when form is valid', () => {
    component.userForm.setValue({
      name: 'John Doe',
      email: 'john@example.com',
      emailConfirmation: 'john@example.com',
      password: 'password123',
      passwordConfirmation: 'password123',
      avatar: '',
    });

    expect(component.isFormInvalid).toBeFalse();
  });

  it('should call signUp method when form is submitted', () => {
    spyOn(component, 'signUp');
    const button = fixture.debugElement.nativeElement.querySelector('#btn-signup');
    button.click();
    expect(component.signUp).toHaveBeenCalled();
  });
});
