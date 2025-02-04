import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { Movie, ResultsEntity, Videos } from "../interfaces/movie.interface";
import { Moviedetails } from "../interfaces/detals.interface";
import {  MovieActors, MoviePoster } from "../interfaces/actors.interface";



@Injectable({
  providedIn: "root",
})
export class MoviesService {
  private baseUrl =
    "https://api.themoviedb.org/3/movie/";
  private apiKey = "6cf4b9ac6e53990573d2f5641773cfa8"
  private moviesSubject$ = new BehaviorSubject<ResultsEntity[]>([]);
  movies$ = this.moviesSubject$.asObservable();

  constructor(private http: HttpClient) {
    this.getAllMovies(1).subscribe();
  }

  getAllMovies(page:number) {
    return this.http.get<Movie>(`${this.baseUrl}popular?api_key=${this.apiKey}&page=${page} `)
    .pipe(
      tap((data:Movie)=>{
        const movies = this.moviesSubject$.getValue();
        this.moviesSubject$.next([...movies, ...data.results]);
      })
    );
  }

  getMovieDetails(id: string): Observable<Moviedetails> {
    return this.http.get<Moviedetails>(`${this.baseUrl}${id}?api_key=${this.apiKey}`);
  }

  getMovieActor(id:string): Observable<MovieActors>{
    return this.http.get<MovieActors>(`${this.baseUrl}${id}/credits?api_key=${this.apiKey}`)
  }
  getMoviePoster(id:string): Observable<MoviePoster>{
    return this.http.get<MoviePoster>(`${this.baseUrl}${id}/images?api_key=${this.apiKey}`)
  }
  getMovieVideos(Id: number): Observable<Videos> {
    return this.http.get<Videos>(
      `${this.baseUrl}${Id}/videos?api_key=${this.apiKey}`
    );
  }

}
