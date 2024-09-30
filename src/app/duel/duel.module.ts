import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DuelRoutingModule } from './duel-routing.module';
import { DuelPage } from './duel.page';

@NgModule({
  declarations: [DuelPage],
  imports: [
    SharedModule,
    DuelRoutingModule,
  ],
})
export class DuelPageModule { }
