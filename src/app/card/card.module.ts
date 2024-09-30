import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CardPageRoutingModule } from './card-routing.module';
import { CardPage } from './card.page';

@NgModule({
  imports: [
    SharedModule,
    CardPageRoutingModule,
  ],
  declarations: [CardPage]
})
export class CardPageModule {}
