import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../../core/models/movie.model';
import { AppState } from '../../store/app.state';
import { selectFavorites } from 'src/app/store/favorites/favorites.selectors';
import { removeFromFavorites } from 'src/app/store/favorites/favorites.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  favorites$: Observable<Movie[]>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.favorites$ = this.store.pipe(select(selectFavorites));
  }

  removeFromFavorites(movie: Movie) {
    this.store.dispatch(removeFromFavorites({ movie }));
  }

  navigateToDetails(movieId: number) {
    this.router.navigate(['movies', 'movie', movieId]);
  }
}
