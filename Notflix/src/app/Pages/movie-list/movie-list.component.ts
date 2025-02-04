import { Component, HostListener, OnInit } from '@angular/core';
import { Movie, ResultsEntity } from '../../Core/interfaces/movie.interface';
import { MoviesService } from '../../Core/services/movies.service';
import { ScrollService } from '../../Core/services/scroll.service';

@Component({
  selector: 'app-movie-list',
  standalone: false,

  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent implements OnInit {
  movies:ResultsEntity[]=[];
  page:number=1;
  constructor(private movieService: MoviesService, private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.movieService.movies$.subscribe(movies => {
      this.movies = movies;
    });
      

    setTimeout(() => {
      window.scrollTo(0, this.scrollService.getScrollPosition());
    }, 0);
  }

  @HostListener('window:scroll',[])
  onWindowScroll():void{
    this.scrollService.saveScrollPosition(window.scrollY);
    }
  onScrollDown(): void {
      this.page++;
      this.movieService.getAllMovies(this.page).subscribe();
    }
  }
 


