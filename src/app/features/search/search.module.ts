import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from 'src/app/store/search/search.reducer';
import { SearchEffects } from 'src/app/store/search/search.effects';
import { MovieService } from 'src/app/core/services/movie.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailsEffects } from 'src/app/store/movie-details/movie-details.effects';
import { movieDetailsReducer } from 'src/app/store/movie-details/movie-details.reducer';


@NgModule({
  declarations: [
    SearchComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('search', reducer),
    EffectsModule.forFeature([SearchEffects]),
    StoreModule.forFeature('movieDetails', movieDetailsReducer),
    EffectsModule.forFeature([MovieDetailsEffects])
  ],
  providers: [MovieService, SearchEffects, MovieDetailsEffects]
})
export class SearchModule { }
