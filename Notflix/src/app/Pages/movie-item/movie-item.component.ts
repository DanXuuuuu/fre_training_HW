import { Component, Input} from '@angular/core';
import { Movie, ResultsEntity } from '../../Core/interfaces/movie.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-item',
  standalone: false,
  
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss'
})
export class MovieItemComponent{
  @Input() movie!:ResultsEntity;

  constructor(private router:Router){}

  navigateTodetails(id:number){
  this.router.navigate(['/details',id])
}

}
