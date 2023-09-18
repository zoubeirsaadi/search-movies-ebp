import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { MovieService } from 'src/app/core/services/movie.service';
import { AppState } from 'src/app/store/app.state';
import { addToFavorites } from 'src/app/store/favorites/favorites.actions';
import { SearchFilters, searchMovies } from 'src/app/store/search/search.actions';
import { selectSearchResults } from 'src/app/store/search/search.selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  searchResults$!: Observable<Movie[]>;
  categories: any[] = [];

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private movieService: MovieService
  ) {
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      query: [''],
      category: [''], // Filtre catégorie (optionnel)
      year: ['']      // Filtre année (optionnel)
    });
    this.movieService.getMovieGenres().subscribe(response => {
      this.categories = response.genres;
    });
    this.searchResults$ = this.store.pipe(select(selectSearchResults));
  }

  onSubmit() {
    const query = this.searchForm.value.query;
    const filters: SearchFilters = {
      category: this.searchForm.value.category,
      year: this.searchForm.value.year
    };
    this.store.dispatch(searchMovies({ query, filters }));
  }

  addToFavorites(movie: Movie) {
    this.store.dispatch(addToFavorites({ movie }));
  }
}
