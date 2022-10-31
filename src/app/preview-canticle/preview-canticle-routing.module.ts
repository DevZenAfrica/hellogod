import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviewCanticlePage } from './preview-canticle.page';

const routes: Routes = [
  {
    path: '',
    component: PreviewCanticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviewCanticlePageRoutingModule {}
