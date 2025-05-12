import { Component, signal } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-advanced-bar',
  imports: [NgFor],
  templateUrl: './advanced-bar.component.html',
  styleUrl: './advanced-bar.component.scss'
})
export class AdvancedBarComponent {
  progresses = signal<(()=> number)[]>([])
  queue:(() => void)[] = []
  filling = false

  add(){
    const progress = signal(0)
    this.progresses.update((arr)=> [...arr,progress])
    
    this.queue.push(()=> this.animate(progress))
    this.runQueue()
  }

  runQueue(){
    if(this.filling || this.queue.length === 0) return

    this.filling = true
    const progress = this.queue.shift()
    if(progress){
      progress()
    } 
  }
  animate(progress: ReturnType<typeof signal>){
    const duration = 2000;
    const start = performance.now()

    const step = (now:number) => {
      const elapsed = now - start
      const percentage = Math.min((elapsed / duration) * 100, 100)
      progress.set(percentage)

      if(percentage < 100){
        requestAnimationFrame(step)
      } else{
        this.filling = false;
        this.runQueue()
      }
    }

    requestAnimationFrame(step)
    
  }
}
