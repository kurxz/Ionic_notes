
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { newNote } from './newNote.page';

const routes: Routes = [
  {
    path: '',
    component: newNote
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class newNoteRoutingModule {}
