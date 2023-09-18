import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  likesCount: number = 0;
  isLiked: boolean = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private movieService: MovieService,
    private router: Router
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

  addToFavorites(movie: Movie, event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.store.dispatch(addToFavorites({ movie }));
  }

  navigateToDetails(movieId: number) {
    this.router.navigate(['movies', 'movie', movieId]); // Naviguer vers les détails du film
  }

  toggleLike(e: Event) {
    e.stopPropagation();
    // Vérifier si movie possède la propriété isLiked 
    /*
    if ('isLiked' in movie) {
      movie.isLiked = !movie.isLiked;
    } else {
      console.error('La propriété isLiked n\'est pas présente dans le modèle du film.');
    }
  
    *//* Assurer que likesCount est défini
    movie.likesCount = movie.likesCount !== undefined ? movie.likesCount : 0;
  
    if (movie.isLiked) {
      movie.likesCount++;
    } else {
      movie.likesCount--;
    }*/
  }
  
}
