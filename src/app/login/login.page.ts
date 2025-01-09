import {
  Component,
  OnInit,
} from '@angular/core';

import { ColorMode } from '../models/color-mode.model';
import { UserPage } from '../user/user.page';
import { DuelPage } from '../duel/duel.page';

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
  
  public userPage = UserPage;
  public duelPage = DuelPage;

  readonly #EMAIL_KEY = 'remain-email';

  constructor() { }

  public ngOnInit(): void {
    const email = localStorage.getItem(this.#EMAIL_KEY);
    if (email) {
      this.user = email;
      this.userRemains = true;
    }
  }

  public login(): void {
    if (!this.isEmailInvalid && !this.isPasswordInvalid) {
      this.checkRemain();
    } else {
      throw Error('Email or password invalid.');
    }
  }

  public remainEmail({detail}: CustomEvent<{ checked: boolean }>): void {
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

  public getEmailKey() {
    return this.#EMAIL_KEY;
  }

  private checkRemain(): void {
    if (this.userRemains) {
      localStorage.setItem(this.#EMAIL_KEY, this.user);
    } else {
      localStorage.removeItem(this.#EMAIL_KEY);
    }
  }

}
