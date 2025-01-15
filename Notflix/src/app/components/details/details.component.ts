import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Moviedetails } from '../../services/interfaces/detals.interface';
import { CastEntity, MovieActors, MoviePoster,BackdropsEntity} from '../../services/interfaces/actors.interface';
import { MatDialog } from '@angular/material/dialog';
import { TrailerComponent } from '../trailer/trailer.component';
import { Videos } from '../../services/interfaces/movie.interface';


@Component({
  selector: 'app-details',
  standalone: false,
  
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  movie!: Moviedetails;
  genres!: any;
  actors!:CastEntity[];
  backdrop_img = '';
  poster_imgs!:BackdropsEntity[];
  selectedVideoId=''
 
 

  constructor(private route: ActivatedRoute, private ms: MoviesService,private dialog: MatDialog) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.params['id'];  

    this.ms.getMovieDetails(movieId).subscribe((data:Moviedetails) => {
      this.movie = data;

      this.genres = this.movie.genres.map(genre => genre.name).join(', ');
      this.backdrop_img = this.movie.backdrop_path;
      
    }
  );
  this.ms.getMovieActor(movieId).subscribe((data:MovieActors )=>{

     this.actors= data.cast;
   
  })

  this.ms.getMoviePoster(movieId).subscribe((data: MoviePoster)=>{

    this.poster_imgs= data.backdrops;
    console.log(this.poster_imgs)

 })
 this.ms.getMovieVideos(movieId).subscribe((videos: Videos) => {
  const trailer = videos.results.find(
    (video) => video.type === 'Trailer' && video.site === 'YouTube'
  );
  if (trailer) {
    this.selectedVideoId = trailer.key;
  }
});
  }
  openTrailer() {
    this.dialog.open(TrailerComponent, {
      data: { videoId: this.selectedVideoId },
    });
  }
}