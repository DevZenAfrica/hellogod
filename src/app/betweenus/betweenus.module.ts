import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BetweenusPageRoutingModule } from './betweenus-routing.module';

import { BetweenusPage } from './betweenus.page';
import {HomePageModule} from "../home/home.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BetweenusPageRoutingModule,
    HomePageModule
  ],
  declarations: [BetweenusPage]
})
export class BetweenusPageModule {}
