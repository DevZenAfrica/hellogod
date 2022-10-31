import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewHolyBiblePageRoutingModule } from './preview-holy-bible-routing.module';

import { PreviewHolyBiblePage } from './preview-holy-bible.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PreviewHolyBiblePageRoutingModule,
        TranslateModule
    ],
  declarations: [PreviewHolyBiblePage]
})
export class PreviewHolyBiblePageModule {}
