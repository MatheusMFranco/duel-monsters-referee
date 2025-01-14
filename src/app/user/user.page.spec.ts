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

  it('should call signUp and retrieve form values when form is valid', () => {
    spyOn(component, 'signUp').and.callThrough();

    component.userForm.setValue({
      name: 'Test User',
      email: 'test@example.com',
      emailConfirmation: 'test@example.com',
      password: 'password123',
      passwordConfirmation: 'password123',
      avatar: '',
    });

    expect(component.userForm.valid).toBeTrue();

    component.signUp();

    expect(component.signUp).toHaveBeenCalled();
    expect(component.userForm.value).toEqual({
      name: 'Test User',
      email: 'test@example.com',
      emailConfirmation: 'test@example.com',
      password: 'password123',
      passwordConfirmation: 'password123',
      avatar: '',
    });
  });

  it('should trigger click on hidden file input element when avatar is clicked', () => {
    const fileInput = fixture.nativeElement.querySelector('#input-avatar');
    const clickSpy = spyOn(fileInput, 'click');
    const avatarElement = fixture.nativeElement.querySelector('ion-avatar');
    avatarElement.click();
    expect(clickSpy).toHaveBeenCalled();
  });

  it('should update avatarPreview and form control when a file is selected', done => {
    const file = new Blob(['dummy image data'], { type: 'image/png' });
    const fileInputEvent = {
      target: {
        files: [file],
      },
    } as unknown as Event;

    const patchSpy = spyOn(component.userForm, 'patchValue');

    component.onAvatarSelected(fileInputEvent);

    const reader = new FileReader();
    reader.onload = () => {
      expect(component.avatarPreview).toBe(reader.result as string);
      expect(patchSpy).toHaveBeenCalledWith({ avatar: reader.result as string });
      done();
    };
    reader.readAsDataURL(file);
  });
});
