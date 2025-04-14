import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Book, BookService } from '../../services/book.service';
import { WishlistService } from '../../services/wishlist.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchControl = new FormControl('');
  books$: Observable<{ items: Book[] }> | undefined;
  wishlist: Book[] = [];
  private searchTerms = new Subject<string>();

  constructor(
    private bookService: BookService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.books$ = this.bookService.getBooksWithDebounce(this.searchTerms);
    
    this.searchControl.valueChanges.subscribe(value => {
      if (value) {
        this.searchTerms.next(value);
      }
    });

    this.wishlistService.wishlist$.subscribe(books => {
      this.wishlist = books;
    });
  }

  addToWishlist(book: Book): void {
    this.wishlistService.addToWishlist(book);
  }

  removeFromWishlist(bookId: string): void {
    this.wishlistService.removeFromWishlist(bookId);
  }

  getBookThumbnail(book: Book): string | null {
    return book?.volumeInfo?.imageLinks?.thumbnail || null;
  }

  getBookTitle(book: Book): string {
    return book?.volumeInfo?.title || 'Untitled';
  }

  isInWishlist(bookId: string): boolean {
    return this.wishlist.some(book => book.id === bookId);
  }
}
