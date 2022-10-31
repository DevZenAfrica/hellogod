import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanticlesPageRoutingModule } from './canticles-routing.module';

import { CanticlesPage } from './canticles.page';
import {MiniatureCanticleComponent} from "../../shared/miniature-canticle/miniature-canticle.component";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CanticlesPageRoutingModule,
        TranslateModule
    ],
  declarations: [CanticlesPage, MiniatureCanticleComponent]
})
export class CanticlesPageModule {}
