import { Component } from '@angular/core';

import bannedCardsMock from './banned-cards.mock';

@Component({
  selector: 'app-banned',
  templateUrl: './banned.page.html',
  styleUrls: ['./banned.page.scss'],
})
export class BannedPage {

  public cards = bannedCardsMock;

  constructor() { }

}
