import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarjetaSwappiPage } from './tarjeta-swappi.page';

const routes: Routes = [
  {
    path: '',
    component: TarjetaSwappiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarjetaSwappiPageRoutingModule {}
