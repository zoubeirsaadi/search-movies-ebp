import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/core/models/movie.model';

export const loadMovieDetails = createAction('[Movie Details] Load Movie Details', props<{ id: number }>());
export const movieDetailsLoaded = createAction('[Movie Details] Movie Details Loaded', props<{ details: Movie }>());
