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


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('search', reducer),
    EffectsModule.forFeature([SearchEffects])
  ],
  providers: [MovieService, SearchEffects]
})
export class SearchModule { }
