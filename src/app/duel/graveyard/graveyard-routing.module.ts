import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraveyardPage } from './graveyard.page';

const routes: Routes = [
  {
    path: '',
    component: GraveyardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraveyardPageRoutingModule {}
