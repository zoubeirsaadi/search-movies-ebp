import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { withLatestFrom, mergeMap, map } from 'rxjs/operators';
import { AppState } from '../../store/app.state';
import * as FavoritesActions from './favorites.actions';
import { selectFavorites } from './favorites.selectors'; // Ajout de l'import pour le sélecteur

@Injectable()
export class FavoritesEffects {

  constructor(
    private actions$: Actions,
    private store: Store<AppState>
  ) {}

  addToFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FavoritesActions.addToFavorites),
      withLatestFrom(this.store.pipe(select(selectFavorites))),
      mergeMap(([action, favorites]) => {
        const movie = action.movie;
        if (!favorites.find(fav => fav.id === movie.id)) {
          return of(FavoritesActions.addToFavoritesSuccess({ movie }));
        }
        return of(FavoritesActions.addToFavoritesFailure({ error: 'Movie is already in favorites' }));
      })
    )
  );
}
