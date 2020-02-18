import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionAliadoPage } from './seleccion-aliado.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionAliadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionAliadoPageRoutingModule {}
