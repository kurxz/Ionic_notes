import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAndEditListPage } from './viewAndEditList.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAndEditListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAndEditListPageRoutingModule {}
