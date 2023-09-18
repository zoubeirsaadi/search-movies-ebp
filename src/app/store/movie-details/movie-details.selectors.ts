import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieDetailsState } from './movie-details.reducer';

export const selectMovieDetailsState = createFeatureSelector<MovieDetailsState>('movieDetails');

export const selectMovieDetails = createSelector(
  selectMovieDetailsState,
  (state: MovieDetailsState) => state.details
);
