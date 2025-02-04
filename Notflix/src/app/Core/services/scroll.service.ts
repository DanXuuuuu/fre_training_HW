import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollPosition:number=0;
  saveScrollPosition(position:number):void{
    this.scrollPosition=position;
    console.log('saveScrollPosition',this.scrollPosition);
  }
  getScrollPosition():number{
    console.log('getScrollPosition',this.scrollPosition);
    return this.scrollPosition;
  
  }
}

