import { Component, Input, Output,EventEmitter} from '@angular/core';
import { Person } from '../change-list/change-list.component';
 

@Component({
  selector: 'app-change-list-card',
  standalone: false,
  
  templateUrl: './change-list-card.component.html',
  styleUrl: './change-list-card.component.css'
})
export class ChangeListCardComponent {
  @Input() person!: Person;
  @Output() personRef = new EventEmitter<Person>();

  handleClick(){
    this.personRef.emit(this.person);
  }

}
