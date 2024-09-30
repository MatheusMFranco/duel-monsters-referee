import { Component } from '@angular/core';

import graveyardCardsMock from './graveyard-cards.mock';

@Component({
  selector: 'app-graveyard',
  templateUrl: './graveyard.page.html',
  styleUrls: ['./graveyard.page.scss'],
})
export class GraveyardPage {

  public cards = graveyardCardsMock;

  constructor() { }

}
