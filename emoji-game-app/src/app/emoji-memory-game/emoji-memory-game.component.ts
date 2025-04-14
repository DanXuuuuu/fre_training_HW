import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

@Component({
  selector: 'app-emoji-memory-game',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './emoji-memory-game.component.html',
  styleUrls: ['./emoji-memory-game.component.css']
})
export class EmojiMemoryGameComponent implements OnInit {
  emojis: string[] = [
    '🐵', '🐶', '🦊', '🐱', '🦁', '🐯', '🐴', '🦄',
    '🦓', '🦌', '🐮', '🐷', '🐭', '🐹', '🐻', '🐨',
    '🐼', '🐽', '🐸', '🐰', '🐙'
  ];

  cards: Card[] = [];
  flippedIndices: number[] = [];
  matchedIndices: number[] = [];
  gameOver: boolean = false;

  ngOnInit(): void {
    this.initializeGame();
  }

  initializeGame(): void {
    const selected = this.shuffle([...this.emojis]).slice(0, 8);
    const paired = this.shuffle([...selected, ...selected]);

    this.cards = paired.map((emoji, index) => ({
      id: index,
      emoji,
      isFlipped: false,
      isMatched: false
    }));

    this.flippedIndices = [];
    this.matchedIndices = [];
    this.gameOver = false;
  }

  shuffle<T>(array: T[]): T[] {
    return array.sort(() => Math.random() - 0.5);
  }

  onCardClick(index: number): void {
    const card = this.cards[index];
    if (card.isFlipped || card.isMatched || this.flippedIndices.length === 2) return;

    card.isFlipped = true;
    this.flippedIndices.push(index);

    if (this.flippedIndices.length === 2) {
      const [firstIdx, secondIdx] = this.flippedIndices;
      const firstCard = this.cards[firstIdx];
      const secondCard = this.cards[secondIdx];

      if (firstCard.emoji === secondCard.emoji) {
        firstCard.isMatched = true;
        secondCard.isMatched = true;
        this.matchedIndices.push(firstIdx, secondIdx);
        this.flippedIndices = [];

        if (this.matchedIndices.length === this.cards.length) {
          this.gameOver = true;
        }
      } else {
        setTimeout(() => {
          firstCard.isFlipped = false;
          secondCard.isFlipped = false;
          this.flippedIndices = [];
        }, 1000);
      }
    }
  }
}
