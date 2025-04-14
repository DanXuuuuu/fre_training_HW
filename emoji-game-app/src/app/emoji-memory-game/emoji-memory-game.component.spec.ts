import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiMemoryGameComponent } from './emoji-memory-game.component';

describe('EmojiMemoryGameComponent', () => {
  let component: EmojiMemoryGameComponent;
  let fixture: ComponentFixture<EmojiMemoryGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmojiMemoryGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmojiMemoryGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
