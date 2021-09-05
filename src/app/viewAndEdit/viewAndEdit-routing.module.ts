import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { viewAndEditPage } from './viewAndEdit.page';

const routes: Routes = [
  {
    path: '',
    component: viewAndEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class viewAndEditPageRoutingModule {}
