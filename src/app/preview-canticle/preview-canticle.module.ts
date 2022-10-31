import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewCanticlePageRoutingModule } from './preview-canticle-routing.module';

import { PreviewCanticlePage } from './preview-canticle.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PreviewCanticlePageRoutingModule,
        TranslateModule
    ],
  declarations: [PreviewCanticlePage]
})
export class PreviewCanticlePageModule {}
