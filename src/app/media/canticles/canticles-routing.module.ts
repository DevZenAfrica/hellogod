import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanticlesPage } from './canticles.page';

const routes: Routes = [
  {
    path: '',
    component: CanticlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanticlesPageRoutingModule {}
