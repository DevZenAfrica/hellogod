import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviewArticlePage } from './preview-article.page';

const routes: Routes = [
  {
    path: '',
    component: PreviewArticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviewArticlePageRoutingModule {}
