import {
  Component,
  OnInit,
} from '@angular/core';

import { ColorMode } from '../models/color-mode.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  
  public user = '';
  public password = '';
  public userRemains = false;
  public colorMode: ColorMode = 'success'; 
  
  private readonly EMAIL_KEY = 'remain-email';

  constructor() { }

  public ngOnInit(): void {
    const email = localStorage.getItem(this.EMAIL_KEY);
    if (email) {
      this.user = email;
      this.userRemains = true;
    }
  }

  public login(): void {
    if (this.userRemains) {
      localStorage.setItem(this.EMAIL_KEY, this.user);
    } else {
      localStorage.removeItem(this.EMAIL_KEY);
    }
  }

  public remainEmail({detail}: CustomEvent): void {
    this.userRemains = detail.checked;
  }

  public fieldChange(): void {
    this.colorMode = this.isEmailInvalid || this.isPasswordInvalid ? 'danger' : 'success';
  }

  public get isPasswordInvalid(): boolean {
    return this.password.length < 8;
  }

  public get isEmailInvalid(): boolean {
    return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.user);
  }

}
