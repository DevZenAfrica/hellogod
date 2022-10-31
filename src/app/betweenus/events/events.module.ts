import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';
import {HomePageModule} from '../../home/home.module';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EventsPageRoutingModule,
        HomePageModule,
        TranslateModule
    ],
    declarations: [EventsPage]
})
export class EventsPageModule {}
