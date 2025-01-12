import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { matchFields } from '../shared/validators/match-field/match-field.validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage {
  public userForm: FormGroup;
  public avatarPreview: string | null = null;

  constructor(private readonly fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      emailConfirmation: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirmation: ['', [Validators.required, Validators.minLength(8)]],
      avatar: [''],
    },
    {
      validators: [
        matchFields('email', 'emailConfirmation'),
        matchFields('password', 'passwordConfirmation'),
      ],
    });
  }

  public signUp(): void {
    const newUser = this.userForm.value;
  }

  public triggerFileInput(): void {
    const fileInput = document.getElementById('input-avatar') as HTMLInputElement;
    fileInput.click();
  }

  public onAvatarSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.avatarPreview = reader.result as string;
        this.userForm.patchValue({ avatar: this.avatarPreview });
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  get isFormInvalid(): boolean {
    return this.userForm.invalid;
  }
}
