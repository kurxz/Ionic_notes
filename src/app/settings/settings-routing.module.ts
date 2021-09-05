import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { settingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: settingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class settingsPageRoutingModule {}
