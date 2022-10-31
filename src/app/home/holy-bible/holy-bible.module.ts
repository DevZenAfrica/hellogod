import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HolyBiblePageRoutingModule } from './holy-bible-routing.module';

import { HolyBiblePage } from './holy-bible.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HolyBiblePageRoutingModule,
        TranslateModule
    ],
  declarations: [HolyBiblePage]
})
export class HolyBiblePageModule {}
