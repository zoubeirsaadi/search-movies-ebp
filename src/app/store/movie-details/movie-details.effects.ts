import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import * as MovieDetailsActions from './movie-details.actions';
import { MovieService } from 'src/app/core/services/movie.service';

@Injectable()
export class MovieDetailsEffects {

  constructor(
    private actions$: Actions,
    private movieDetailsService: MovieService
  ) {}

  loadMovieDetails$ = createEffect(() => this.actions$.pipe(
    ofType(MovieDetailsActions.loadMovieDetails),
    mergeMap(({ id }) => this.movieDetailsService.getMovieDetails(id)
      .pipe(
        map(details => MovieDetailsActions.movieDetailsLoaded({ details })),
      ))
    )
  );
}
