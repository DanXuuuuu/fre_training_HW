import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  movies = [
    'Changjinhu (2021)',
    'Dune (2021)',
    'Shang-Chi and the Legend of the Ten Rings (2021)',
    'Free Guy (2021)',
    'The Many Saints of Newark (2021)',
    'Finch (2021)',
    'Candyman (2021)',
    'No Time to Die (2021)',
    'Halloween Kills (2021)',
  ];
  selectAll: boolean = false;
  selectedMovies: string[]=[];

  toggleSelectAll(){
    if(this.selectAll){
      this.selectedMovies = [...this.movies];
    }else{
      this.selectedMovies = [];
    }
  }

  updateSelectAll(movie: string, event: Event){
    const isChecked = (event.target as HTMLInputElement).checked;
    if(isChecked){
      this.selectedMovies.push(movie)
    }else{
      this.selectedMovies = this.selectedMovies.filter(m => m!==movie);
    }

    this.selectAll = this.selectedMovies.length === this.movies.length;
  }

  clearAll(){
    this.selectAll = false;
    this.selectedMovies = []
  }
 
}
