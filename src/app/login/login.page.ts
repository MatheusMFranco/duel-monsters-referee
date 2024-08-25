import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  
  public user = '';
  public password = '';
  public userRemains = false;
  
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

}
