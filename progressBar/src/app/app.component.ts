import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarsComponent } from './bars/bars.component';
import { NgFor } from '@angular/common';
import { AdvancedBarComponent } from './advanced-bar/advanced-bar.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,BarsComponent,NgFor,AdvancedBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  bars = signal<number[]>([])

 add(){
  this.bars.update((n: number[])=> [...n,n.length])
 }
}
