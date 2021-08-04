import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotaPage } from './nota.page';

const routes: Routes = [
  {
    path: '',
    component: NotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotaPageRoutingModule {}
