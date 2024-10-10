import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ActionSheetController } from '@ionic/angular';

import { LuckyGuy } from 'super-lucky-guy';


import { Jokenpo } from './jokenpo.enum';
import { Coin } from './coin.enum';
import { luckyButtonsField } from './battle.field';
import { SideKey } from './side.type';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.page.html',
  styleUrls: ['./battle.page.scss'],
})
export class BattlePage {

  #starter = new LuckyGuy();

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
    this.handleAction(result.data.action);
  }

  private handleAction(action: string): void {
    switch (action) {
      case 'flipCoin':
        console.log(`Coin result: ${this.flipCoin}`);
        break;

      case 'showHand':
        console.log(`Jokenpo result: ${this.showHand}`);
        break;

      case 'rollDice':
        console.log(`Dice result: ${this.rollDice}`);
        break;

      default:
        console.log('Action cancelled');
    }
  }

  get rollDice(): number {
    return this.#starter.dice();
  }

  get showHand(): string {
    return this.#starter.jokenpo();
  }

  get flipCoin(): string {
    return this.#starter.coin();
  }

  private navigateToCardPage(cardName: string): void {
    this.router.navigate(['/card'], { queryParams: { name: cardName } });
  }

}
