import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewListPageRoutingModule } from './newList-routing.module';

import { NewListPage } from './newList.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewListPageRoutingModule,
    TranslateModule
  ],
  declarations: [NewListPage]
})
export class NewListPageModule {}
