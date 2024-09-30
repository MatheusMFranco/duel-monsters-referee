import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { BattlePageRoutingModule } from './battle-routing.module';
import { BattlePage } from './battle.page';

@NgModule({
  imports: [
    SharedModule,
    BattlePageRoutingModule,
  ],
  declarations: [BattlePage]
})
export class BattlePageModule {}
