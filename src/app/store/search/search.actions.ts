import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/core/models/movie.model';

export const searchMovies = createAction('[Search] Search Movies', props<{ query: string }>());
export const searchMoviesSuccess = createAction('[Search] Search Movies Success', props<{ results: Movie[] }>());
export const searchMoviesFailure = createAction('[Search] Search Movies Failure', props<{ error: any }>());
