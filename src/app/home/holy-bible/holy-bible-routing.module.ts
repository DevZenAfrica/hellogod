import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HolyBiblePage } from './holy-bible.page';

const routes: Routes = [
  {
    path: '',
    component: HolyBiblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HolyBiblePageRoutingModule {}
