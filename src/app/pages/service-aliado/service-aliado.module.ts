import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceAliadoPageRoutingModule } from './service-aliado-routing.module';

import { ServiceAliadoPage } from './service-aliado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceAliadoPageRoutingModule
  ],
  declarations: [ServiceAliadoPage]
})
export class ServiceAliadoPageModule {}
