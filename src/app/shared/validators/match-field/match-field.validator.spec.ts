import { FormGroup, FormControl, Validators } from '@angular/forms';

import { matchFields } from './match-field.validator';
describe('matchFields Validator', () => {
  let form: FormGroup;

  beforeEach(() => {
    form = new FormGroup({
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    }, { validators: matchFields('password', 'confirmPassword') });
  });

  it('should return null when both fields match', () => {
    form.controls['password'].setValue('12345678');
    form.controls['confirmPassword'].setValue('12345678');
    
    expect(form.valid).toBeTrue();
    expect(form.errors).toBeNull();
    expect(form.controls['confirmPassword'].errors).toBeNull();
  });

  it('should set an error when fields do not match', () => {
    form.controls['password'].setValue('12345678');
    form.controls['confirmPassword'].setValue('87654321');

    expect(form.valid).toBeFalse();
    expect(form.errors).toEqual({ confirmedValidator: 'Passwords do not match.' });
    expect(form.controls['confirmPassword'].errors).toEqual({ confirmedValidator: 'Passwords do not match.' });
  });

  it('should not overwrite other errors on the matching field', () => {
    form.controls['password'].setValue('12345678');
    form.controls['confirmPassword'].setValue('87654321');
    
    expect(form.controls['confirmPassword'].errors).toEqual({ confirmedValidator: 'Passwords do not match.' });
  });

  it('should remove the error when fields are corrected to match', () => {
    form.controls['password'].setValue('12345678');
    form.controls['confirmPassword'].setValue('87654321');

    expect(form.controls['confirmPassword'].errors).toEqual({ confirmedValidator: 'Passwords do not match.' });

    form.controls['confirmPassword'].setValue('12345678');
    form.updateValueAndValidity();

    expect(form.valid).toBeTrue();
    expect(form.controls['confirmPassword'].errors).toBeNull();
  });
});
