import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { UserPageRoutingModule } from './user-routing.module';
import { UserPage } from './user.page';

@NgModule({
  declarations: [UserPage],
  imports: [
    SharedModule,
    UserPageRoutingModule,
    ReactiveFormsModule,
  ],
})
export class UserPageModule {}
