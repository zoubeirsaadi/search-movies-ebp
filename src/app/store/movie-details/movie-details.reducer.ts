import { Action, createReducer, on } from '@ngrx/store';
import * as MovieDetailsActions from './movie-details.actions';
import { Movie } from 'src/app/core/models/movie.model';

export interface MovieDetailsState {
  details: Movie;
}

const initialState: MovieDetailsState = {
  details: {
      id: 0,
      title: '',
      overview: '',
      poster_path: '',
      release_date: ''
  }
};

const _movieDetailsReducer = createReducer(
  initialState,
  on(MovieDetailsActions.movieDetailsLoaded, (state, { details }) => ({
    ...state,
    details
  }))
);

export function movieDetailsReducer(state: MovieDetailsState | undefined, action: Action) {
  return _movieDetailsReducer(state, action);
}
