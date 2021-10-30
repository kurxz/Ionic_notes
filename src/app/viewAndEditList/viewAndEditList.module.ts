import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAndEditListPageRoutingModule } from './viewAndEditList-routing.module';

import { ViewAndEditListPage } from './viewAndEditList.page';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAndEditListPageRoutingModule,
    TranslateModule
  ],
  declarations: [ViewAndEditListPage]
})
export class ViewAndEditListPageModule {}
