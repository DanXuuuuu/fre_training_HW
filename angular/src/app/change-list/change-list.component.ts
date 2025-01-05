import { Component } from '@angular/core';

@Component({
  selector: 'app-change-list',
  standalone: false,
  
  templateUrl: './change-list.component.html',
  styleUrl: './change-list.component.css'
})
export class ChangeListComponent {
  people: Person[]=[
    {
      id:1,
      name:'James',
      color:'red',
      content:'Maintained by a dedicated team at Google, Angular provides a broad suite of tools, APIs, and libraries to simplify and streamline your development workflow. Angular gives you a solid platform on which to build fast, reliable applications that scale with both the size of your team and the size of your codebase.'
    },
    {
      id:2,
      name:'Will Kenny',
      color:'blue',
      content:'Angular simplifies web app development by using a structured, modular approach and libraries. These libraries provide reusable UI components, utility functions, and services, making it easier to build and maintain complex web apps.',
    },
    {
      id:3,
      name:'Benth Williams',
      color:'green',
      content:'Netflix is an American subscription video on-demand over-the-top streaming service. The service primarily distributes original and acquired films and television shows from various genres, and it is available internationally in multiple languages.'},
    {
      id:4,
      name:'Rev Shawn',
      color:'black',
      content:'This article is about the streaming service.It is very important to know how the Angular framework works before you start using it.The following tutorials introduce you to Angular and discuss Angulars architecture.'}
  ];

    selectedItem: Person = this.people[0];

    handleClick(person: Person){
      this.selectedItem = person;

    }
 

}
export interface Person {
    id:number,
    name: string,
    color: string,
    content: string;
}
