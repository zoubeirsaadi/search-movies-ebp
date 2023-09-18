import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { AppState } from 'src/app/store/app.state';
import { searchMovies } from 'src/app/store/search/search.actions';
import { selectSearchResults } from 'src/app/store/search/search.selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  searchResults$!: Observable<Movie[]>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      query: ['']
    });
    this.searchResults$ = this.store.pipe(select(selectSearchResults));
  }

  onSubmit() {
    debugger
    const query = this.searchForm.value.query;
    this.store.dispatch(searchMovies({ query }));
  }
}
