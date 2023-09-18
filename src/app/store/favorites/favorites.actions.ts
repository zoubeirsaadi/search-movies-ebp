import { createAction, props } from '@ngrx/store';
import { Movie } from '../../core/models/movie.model';

export const addToFavorites = createAction('[Favorites] Add To Favorites', props<{ movie: Movie }>());
export const addToFavoritesSuccess = createAction('[Favorites] Add To Favorites Success', props<{ movie: Movie }>());
export const addToFavoritesFailure = createAction('[Favorites] Add To Favorites Failure', props<{ error: string }>());
export const removeFromFavorites = createAction('[Favorites] Remove From Favorites', props<{ movie: Movie }>());