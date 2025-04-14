import { Component, OnInit } from '@angular/core';
import { Book } from '../../services/book.service';
import { WishlistService } from '../../services/wishlist.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlist: Book[] = [];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.wishlistService.wishlist$.subscribe(books => {
      this.wishlist = books;
    });
  }

  removeFromWishlist(bookId: string): void {
    this.wishlistService.removeFromWishlist(bookId);
  }
}
