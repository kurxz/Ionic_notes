import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewListPage } from './newList.page';

const routes: Routes = [
  {
    path: '',
    component: NewListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewListPageRoutingModule {}
