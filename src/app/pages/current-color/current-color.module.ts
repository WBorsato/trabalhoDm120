import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentColorPageRoutingModule } from './current-color-routing.module';

import { CurrentColorPage } from './current-color.page';

import {​​ ChartModule }​​ from 'angular2-highcharts';
import * as highcharts from 'highcharts';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentColorPageRoutingModule,
    ChartModule.forRoot(highcharts)
  ],
  declarations: [CurrentColorPage]
})
export class CurrentColorPageModule {}
