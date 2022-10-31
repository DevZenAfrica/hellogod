import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviewHolyBiblePage } from './preview-holy-bible.page';

const routes: Routes = [
  {
    path: '',
    component: PreviewHolyBiblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviewHolyBiblePageRoutingModule {}
