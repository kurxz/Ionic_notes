import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { newNoteRoutingModule } from './newNote-routing.module';

import { newNote } from './newNote.page';
import { IonicStorageModule } from '@ionic/storage-angular';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    newNoteRoutingModule,
    TranslateModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [newNote]
})
export class newNotePageModule {}
