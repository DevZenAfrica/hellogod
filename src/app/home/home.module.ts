import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {PrintNewsComponent} from '../shared/print-news/print-news.component';
import {MiniatureArticleComponent} from '../shared/miniature-article/miniature-article.component';
import {HeaderComponent} from '../shared/header/header.component';
import {ChooseCountryComponent} from "../shared/choose-country/choose-country.component";
import {PrintTopArticleComponent} from "../shared/print-top-article/print-top-article.component";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        TranslateModule
    ],
  exports: [MiniatureArticleComponent, HeaderComponent],
  declarations: [HomePage, PrintNewsComponent, MiniatureArticleComponent, HeaderComponent, ChooseCountryComponent, PrintTopArticleComponent]
})
export class HomePageModule {}
