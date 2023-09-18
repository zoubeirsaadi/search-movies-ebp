import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MovieService } from 'src/app/core/services/movie.service';
import * as SearchActions from './search.actions';

@Injectable()
export class SearchEffects {

  constructor(
    private actions$: Actions,
    private movieService: MovieService
  ) {}

  searchMovies$ = createEffect(() => this.actions$.pipe(
    ofType(SearchActions.searchMovies),
    mergeMap(({ query, filters }) => {
      if (filters && (filters.category || filters.year)) {
        return this.movieService.searchMovies(query, filters).pipe(
          map(results => SearchActions.searchMoviesSuccess({ results })),
          catchError(error => of(SearchActions.searchMoviesFailure({ error })))
        );
      } else {
        return this.movieService.searchMovies(query).pipe(
          map(results => SearchActions.searchMoviesSuccess({ results })),
          catchError(error => of(SearchActions.searchMoviesFailure({ error })))
        );
      }
    })
  ));
}
