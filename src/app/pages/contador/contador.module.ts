import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContadorRoutingModule } from './contador-routing.module';
import { ContadorComponent } from './contador.component';


@NgModule({
  declarations: [
    ContadorComponent
  ],
  imports: [
    CommonModule,
    ContadorRoutingModule
  ]
})
export class ContadorModule { }
