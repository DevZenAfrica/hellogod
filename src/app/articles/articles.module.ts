import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticlesPageRoutingModule } from './articles-routing.module';

import { ArticlesPage } from './articles.page';
import {TranslateModule} from "@ngx-translate/core";
import {HomePageModule} from "../home/home.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticlesPageRoutingModule,
    TranslateModule,
    HomePageModule
  ],
  declarations: [ArticlesPage]
})
export class ArticlesPageModule {}
