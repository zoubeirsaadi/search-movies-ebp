import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '99ff32db7eecda934bf40be4ac0f2bfa';  // clé API TMDB
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getMovieGenres(): Observable<any> {
    const url = `${this.apiUrl}/genre/movie/list`;
    const params = new HttpParams().set('api_key', this.apiKey);
  
    return this.http.get<any>(url, { params });
  }

  searchMovies(query: string, filters?: any): Observable<Movie[]> {
    let params = new HttpParams().set('query', query).set('api_key', this.apiKey);

    if (filters) {
      if (filters.year) {
        params = params.set('year', filters.year.toString());
      }
      if (filters.category) {
        params = params.set('with_genres', filters.category);
      }
    }

    const url = `${this.apiUrl}/search/movie`;

    return this.http.get<any>(url, { params }).pipe(
      map(response => response.results)
    );
  }
}
