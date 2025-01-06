import { Component } from '@angular/core';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-wish-list',
  standalone: false,
  
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent {

  wishList: any = [];
  constructor(private bookService: BookService){}

  ngOnInit(): void{
    this.bookService.wishListSubject$.subscribe(wishList =>{
      this.wishList = wishList;
    })
  }

}
