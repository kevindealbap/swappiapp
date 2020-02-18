import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceAliadoPage } from './service-aliado.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceAliadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceAliadoPageRoutingModule {}
