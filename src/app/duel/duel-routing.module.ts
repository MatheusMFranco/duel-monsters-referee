import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { DuelPage } from './duel.page';

const routes: Routes = [
  {
    path: '',
    component: DuelPage,
    children: [
      {
        path: 'battle',
        loadChildren: () => import('./battle/battle.module').then(m => m.BattlePageModule)
      },
      {
        path: 'graveyard',
        loadChildren: () => import('./graveyard/graveyard.module').then(m => m.GraveyardPageModule)
      },
      {
        path: 'banned',
        loadChildren: () => import('./banned/banned.module').then(m => m.BannedPageModule)
      },
      {
        path: '',
        redirectTo: '/duel/battle',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'battle',
    loadChildren: () => import('./battle/battle.module').then( m => m.BattlePageModule)
  },
  {
    path: 'graveyard',
    loadChildren: () => import('./graveyard/graveyard.module').then( m => m.GraveyardPageModule)
  },
  {
    path: 'banned',
    loadChildren: () => import('./banned/banned.module').then( m => m.BannedPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuelRoutingModule { }
