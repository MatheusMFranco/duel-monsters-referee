import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ActionSheetController } from '@ionic/angular';

import { Logger } from '../../decorators/logger';
import { Randomize } from '../../decorators/randomize';
import { luckyButtonsField } from './battle.field';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.page.html',
  styleUrls: ['./battle.page.scss'],
})
export class BattlePage {

  @Randomize private readonly dice!: string;
  @Randomize private readonly jokenpo!: string;
  @Randomize private readonly coin!: string;

  public cardNameButtons = [{
    text: 'FIND',
    handler: ({ cardName }: { cardName: string }) => this.navigateToCardPage(cardName),
  }];

  public cardNameInputs = [
    {
      name: 'cardName',
      placeholder: 'Card Name',
    }
  ];

  constructor(
    private readonly router: Router,
    private readonly actionSheetCtrl: ActionSheetController,
  ) { }

  //TODO: transformar uma classe dessa lógica de sorte com o Chain of Responsability
  public async presentLucky(): Promise<void> {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Is today your lucky day?',
      buttons: luckyButtonsField,
    });
    await actionSheet.present();
    const result = await actionSheet.onDidDismiss();
    if (result?.data?.action) {
      this.handleAction(result.data.action);
    }
  }

  @Logger('YOU')
  private handleAction(action: string): string {
    switch (action) {
      case 'flipCoin':
        return `flip a coin [${this.coin}]`;

      case 'showHand':
        return `play jokenpo [${this.jokenpo}]`;

      case 'rollDice':
        return `roll a die [${this.dice}]`;

      default:
        return 'do nothing';
    }
  }

  private navigateToCardPage(cardName: string): void {
    this.router.navigate(['/card'], { queryParams: { name: cardName } });
  }

}
