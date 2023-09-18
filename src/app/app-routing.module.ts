import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/errors/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  { 
    path: 'movies',
    loadChildren: () => import('./features/search/search.module').then(m => m.SearchModule) 
  },
  { 
    path: 'favorites', 
    loadChildren: () => import('./features/favorites/favorites.module').then(m => m.FavoritesModule) 
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
