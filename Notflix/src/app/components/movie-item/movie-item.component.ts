import { Component, Input} from '@angular/core';
import { Movie, ResultsEntity } from '../../services/interfaces/movie.interface';


@Component({
  selector: 'app-movie-item',
  standalone: false,
  
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss'
})
export class MovieItemComponent{
  @Input() movie!:ResultsEntity;




}
