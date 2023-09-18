import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as SearchActions from './search.actions';
import { MovieService } from 'src/app/core/services/movie.service';

@Injectable()
export class SearchEffects {

  constructor(
    private actions$: Actions,
    private movieService: MovieService
  ) {}

  searchMovies$ = createEffect(() => this.actions$.pipe(
    ofType(SearchActions.searchMovies),
    mergeMap(({ query }) => {
      console.log('Query:', query); // Log de la requête
      return this.movieService.searchMovies(query).pipe(
        map(results => {
          console.log('Search results:', results); // Log des résultats
          return SearchActions.searchMoviesSuccess({ results });
        }),
        catchError(async (error) => {
          console.error('Search error:', error); // Log des erreurs
          return SearchActions.searchMoviesFailure({ error });
        })
      );
    })
  ));
  
}
