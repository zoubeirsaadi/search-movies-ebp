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

  searchMovies(query: string): Observable<Movie[]> {
    console.log(query);
    
    debugger
    const url = `${this.apiUrl}/search/movie`;
    const params = new HttpParams().set('query', query).set('api_key', this.apiKey);

    return this.http.get<any>(url, { params }).pipe(
      map(response => response.results)
    );
  }
}
