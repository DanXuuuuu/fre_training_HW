import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private baseUrl ='https://api.themoviedb.org/3/movie/popular?api_key=6cf4b9ac6e53990573d2f5641773cfa8';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie>{
    return this.http.get<Movie>(this.baseUrl)
  }
}





 

