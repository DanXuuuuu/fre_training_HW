import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-bars',
  imports: [],
  templateUrl: './bars.component.html',
  styleUrl: './bars.component.scss'
})
export class BarsComponent implements OnInit{
  progress = signal(0)

  ngOnInit(): void {
    const duration = 2000;
    const start = performance.now()

    const updateProgress = (now:number) => {
      const elapsed = now - start
      const percentage = Math.min((elapsed / duration) * 100, 100)
      this.progress.set(percentage)

      if(percentage < 100){
        requestAnimationFrame(updateProgress)
      }
    }

    requestAnimationFrame(updateProgress)
  }

}
