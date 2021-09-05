import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { settingsPageRoutingModule } from './settings-routing.module';

import { settingsPage } from './settings.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    settingsPageRoutingModule,
    TranslateModule
  ],
  declarations: [settingsPage]
})
export class settingsPageModule {}
