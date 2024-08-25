import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuelRoutingModule } from './duel-routing.module';
import { DuelPage } from './duel.page';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [DuelPage],
  imports: [
    CommonModule,
    DuelRoutingModule,
    IonicModule,
  ],
})
export class DuelPageModule { }
