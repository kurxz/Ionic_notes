import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'newNote',
    loadChildren: () => import('./newNote/newNote.module').then( m => m.newNotePageModule)
  },
  {
    path: 'viewAndEdit',
    loadChildren: () => import('./viewAndEdit/viewAndEdit.module').then( m => m.viewAndEditPageeModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.settingsPageModule)
  },
  {
    path: 'newList',
    loadChildren: () => import('./newList/newList.module').then( m => m.NewListPageModule)
  },
  {
    path: 'viewAndEditList',
    loadChildren: () => import('./viewAndEditList/viewAndEditList.module').then( m => m.ViewAndEditListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
