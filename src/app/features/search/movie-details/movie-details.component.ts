import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { AppState } from 'src/app/store/app.state';
import { loadMovieDetails } from 'src/app/store/movie-details/movie-details.actions';
import { selectMovieDetails } from 'src/app/store/movie-details/movie-details.selectors';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails$!: Observable<Movie>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      // Convertir l'ID en nombre si nécessaire
      const id = +movieId;
      this.store.dispatch(loadMovieDetails({ id }));
      this.movieDetails$ = this.store.pipe(select(selectMovieDetails));
    } else {
      console.error('Movie ID is null or undefined.');
    }
  }
  
}
