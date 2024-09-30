import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.page.html',
  styleUrls: ['./battle.page.scss'],
})
export class BattlePage {

  public cardNameButtons = [
    {
      text: 'FIND',
      handler: ({ cardName }: { cardName: string }) => this.navigateToCardPage(cardName),
    }
  ];

  public cardNameInputs = [
    {
      name: 'cardName',
      placeholder: 'Card Name',
    },
  ];

  constructor(private readonly router: Router) { }

  private navigateToCardPage(cardName: string): void {
    this.router.navigate(['/card'], { queryParams: { name: cardName } });
  }

}
