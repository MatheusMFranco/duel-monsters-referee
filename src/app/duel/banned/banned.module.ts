import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { BannedPageRoutingModule } from './banned-routing.module';
import { BannedPage } from './banned.page';

@NgModule({
  imports: [
    SharedModule,
    BannedPageRoutingModule
  ],
  declarations: [BannedPage]
})
export class BannedPageModule {}
