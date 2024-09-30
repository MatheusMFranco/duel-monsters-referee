import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DuelistPage } from './duelist.page';

const routes: Routes = [
  {
    path: '',
    component: DuelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DuelistPageRoutingModule {}
