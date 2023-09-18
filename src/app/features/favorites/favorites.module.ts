import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { StoreModule } from '@ngrx/store';
import { favoritesReducer } from 'src/app/store/favorites/favorites.reducer';
import { FavoritesComponent } from './favorites.component';
import { EffectsModule } from '@ngrx/effects';
import { FavoritesEffects } from 'src/app/store/favorites/favorites.effects';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    StoreModule.forFeature('favorites', favoritesReducer),
    EffectsModule.forFeature([FavoritesEffects])
  ]
})
export class FavoritesModule { }
