import { Action, createReducer, on } from '@ngrx/store';
import { Movie } from '../../core/models/movie.model';
import * as FavoritesActions from './favorites.actions';

export interface FavoritesState {
  favorites: Movie[];
}

export const initialState: FavoritesState = {
  favorites: []
};

const _favoritesReducer = createReducer(
  initialState,
  on(FavoritesActions.addToFavorites, (state, { movie }) => ({
    ...state,
    favorites: [...state.favorites, movie]
  })),
  on(FavoritesActions.removeFromFavorites, (state, { movie }) => ({
    ...state,
    favorites: state.favorites.filter(fav => fav.id !== movie.id)
  }))
);

export function favoritesReducer(state: FavoritesState | undefined, action: Action) {
  return _favoritesReducer(state, action);
}
