import { Component, OnInit } from '@angular/core';
import { Movie, ResultsEntity } from '../../services/interfaces/movie.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-list',
  standalone: false,

  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent implements OnInit {
  movies:ResultsEntity[]=[];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe((data:Movie) => {
      
      this.movies = data.results;
      console.log(this.movies);
      
    });
  }
}
