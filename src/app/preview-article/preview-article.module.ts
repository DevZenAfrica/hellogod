import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewArticlePageRoutingModule } from './preview-article-routing.module';

import { PreviewArticlePage } from './preview-article.page';
import {MiniatureCommentComponent} from "../shared/miniature-comment/miniature-comment.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviewArticlePageRoutingModule
  ],
  declarations: [PreviewArticlePage, MiniatureCommentComponent]
})
export class PreviewArticlePageModule {}
