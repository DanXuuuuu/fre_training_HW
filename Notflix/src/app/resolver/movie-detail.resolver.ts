import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { MoviesService } from "../Core/services/movies.service";
import { Observable } from "rxjs";
import { Moviedetails } from "../Core/interfaces/detals.interface";



@Injectable()
export class MovieDetailResolver implements Resolve<Moviedetails> {
  constructor(private movieService: MoviesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Moviedetails> {
    const movieId = route.paramMap.get('id')!;
    return this.movieService.getMovieDetails(movieId);
  }
}