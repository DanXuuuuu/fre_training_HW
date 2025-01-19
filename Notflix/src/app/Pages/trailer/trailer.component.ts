import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-trailer',
  standalone: false,
  
  templateUrl: './trailer.component.html',
  styleUrl: './trailer.component.scss'
})
export class TrailerComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { videoId: string }) {}
}
