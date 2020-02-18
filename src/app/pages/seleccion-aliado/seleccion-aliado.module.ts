import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionAliadoPageRoutingModule } from './seleccion-aliado-routing.module';

import { SeleccionAliadoPage } from './seleccion-aliado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionAliadoPageRoutingModule
  ],
  declarations: [SeleccionAliadoPage]
})
export class SeleccionAliadoPageModule {}
