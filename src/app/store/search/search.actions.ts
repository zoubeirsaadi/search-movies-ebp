import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/core/models/movie.model';

export interface SearchFilters {
  category?: string;
  year?: number;
}

export const searchMovies = createAction(
  '[Search] Search Movies',
  props<{ query: string; filters?: SearchFilters }>()
);

export const searchMoviesSuccess = createAction(
  '[Search] Search Movies Success',
  props<{ results: Movie[] }>()
);

export const searchMoviesFailure = createAction(
  '[Search] Search Movies Failure',
  props<{ error: any }>()
);
