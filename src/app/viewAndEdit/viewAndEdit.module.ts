import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { viewAndEditPageRoutingModule } from './viewAndEdit-routing.module';

import { viewAndEditPage } from './viewAndEdit.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    viewAndEditPageRoutingModule,
    TranslateModule
  ],
  declarations: [viewAndEditPage]
})
export class viewAndEditPageeModule {}
