import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist: Book[] = [];
  private wishlistSubject = new BehaviorSubject<Book[]>([]);

  wishlist$ = this.wishlistSubject.asObservable();

  addToWishlist(book: Book): void {
    if (!this.wishlist.find(b => b.id === book.id)) {
      this.wishlist.push(book);
      this.wishlistSubject.next([...this.wishlist]);
    }
  }

  removeFromWishlist(bookId: string): void {
    this.wishlist = this.wishlist.filter(book => book.id !== bookId);
    this.wishlistSubject.next([...this.wishlist]);
  }

  getWishlist(): Book[] {
    return [...this.wishlist];
  }
}
