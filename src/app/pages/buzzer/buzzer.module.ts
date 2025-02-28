import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuzzerPageRoutingModule } from './buzzer-routing.module';

import { BuzzerPage } from './buzzer.page';

import {​​ ChartModule }​​ from 'angular2-highcharts';
import * as highcharts from 'highcharts';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuzzerPageRoutingModule,
    ChartModule.forRoot(highcharts)
  ],
  declarations: [BuzzerPage]
})
export class BuzzerPageModule {}
