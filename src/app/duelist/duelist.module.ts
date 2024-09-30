import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DuelistPageRoutingModule } from './duelist-routing.module';
import { DuelistPage } from './duelist.page';

@NgModule({
  imports: [
    SharedModule,
    DuelistPageRoutingModule,
  ],
  declarations: [DuelistPage]
})
export class DuelistPageModule {}
