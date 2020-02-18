import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarjetaSwappiPageRoutingModule } from './tarjeta-swappi-routing.module';

import { TarjetaSwappiPage } from './tarjeta-swappi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarjetaSwappiPageRoutingModule
  ],
  declarations: [TarjetaSwappiPage]
})
export class TarjetaSwappiPageModule {}
