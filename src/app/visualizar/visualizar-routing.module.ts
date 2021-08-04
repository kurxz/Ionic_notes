import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarPage } from './visualizar.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarPageRoutingModule {}
