import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  // template:`<h1>hello world</h1>`,
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
