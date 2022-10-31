import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaPage } from './media.page';

const routes: Routes = [
  {
    path: '',
    component: MediaPage
  },
  {
    path: 'canticles',
    loadChildren: () => import('./canticles/canticles.module').then( m => m.CanticlesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaPageRoutingModule {}
