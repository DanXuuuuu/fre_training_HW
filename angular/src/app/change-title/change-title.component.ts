import { Component } from '@angular/core';

@Component({
  selector: 'app-change-title',
  standalone: false,
  
  templateUrl: './change-title.component.html',
  styleUrl: './change-title.component.css'
})
export class ChangeTitleComponent {
  // btncolor = ['green','blue',...]
  cards: Card[]= [
    {
      id:5,
      btncolor: 'red',
      title:'Google was founded on September 4, 1998, by American computer scientists Larry Page and Sergey Brin while they were PhD students at Stanford University in California. ',
      context:'Google was founded on September 4, 1998, by American computer scientists Larry Page and Sergey Brin while they were PhD students at Stanford University in California. ',
    },
    {
      id:3,
      btncolor: 'black',
      title:'Google was founded on September 4, 1998, by American computer scientists Larry Page and Sergey Brin while they were PhD students at Stanford University in California. ',
      context:'Google was founded on September 4, 1998, by American computer scientists Larry Page and Sergey Brin while they were PhD students at Stanford University in California. ',
    },
    {
      id:9,
      btncolor: 'blue',
      title:'Google was founded on September 4, 1998, by American computer scientists Larry Page and Sergey Brin while they were PhD students at Stanford University in California. ',
      context:'Google was founded on September 4, 1998, by American computer scientists Larry Page and Sergey Brin while they were PhD students at Stanford University in California. ',
    },    
    
    {
      id:6,
      btncolor: 'green',
      title:'Google was founded on September 4, 1998, by American computer scientists Larry Page and Sergey Brin while they were PhD students at Stanford University in California. ',
      context:'Google was founded on September 4, 1998, by American computer scientists Larry Page and Sergey Brin while they were PhD students at Stanford University in California. ',
    },



  ]

  titlecolor = '';
  handleClick(color:string){
    this.titlecolor = color;
  }
}

export interface Card {
  id: number;
  btncolor: string;
  title:  string;
  context: string;
}