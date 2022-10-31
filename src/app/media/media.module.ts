import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MediaPageRoutingModule } from './media-routing.module';

import { MediaPage } from './media.page';
import {HomePageModule} from "../home/home.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MediaPageRoutingModule,
        HomePageModule,
        TranslateModule
    ],
  declarations: [MediaPage]
})
export class MediaPageModule {}
