import { Action, createReducer, on } from '@ngrx/store';
import * as SearchActions from './search.actions';
import { Movie } from 'src/app/core/models/movie.model';

export interface SearchState {
  results: Movie[];
  error: any;
}

export const initialState: SearchState = {
  results: [],
  error: null
};

const searchReducer = createReducer(
  initialState,
  on(SearchActions.searchMoviesSuccess, (state, { results }) => ({
    ...state,
    results,
    error: null
  })),
  on(SearchActions.searchMoviesFailure, (state, { error }) => ({
    ...state,
    results: [],
    error
  }))
);

export function reducer(state: SearchState | undefined, action: Action) {
  return searchReducer(state, action);
}
