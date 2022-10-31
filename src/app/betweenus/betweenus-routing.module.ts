import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BetweenusPage } from './betweenus.page';

const routes: Routes = [
  {
    path: '',
    component: BetweenusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BetweenusPageRoutingModule {}
