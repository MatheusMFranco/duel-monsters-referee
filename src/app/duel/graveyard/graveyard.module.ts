import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { GraveyardPageRoutingModule } from './graveyard-routing.module';
import { GraveyardPage } from './graveyard.page';

@NgModule({
  imports: [
    SharedModule,
    GraveyardPageRoutingModule
  ],
  declarations: [GraveyardPage]
})
export class GraveyardPageModule {}
