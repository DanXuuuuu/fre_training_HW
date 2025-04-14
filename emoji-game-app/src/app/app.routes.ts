import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmojiMemoryGameComponent } from './emoji-memory-game/emoji-memory-game.component';

export const routes: Routes = [
  { path: '', redirectTo: 'game', pathMatch: 'full' },
  { path: 'game', component: EmojiMemoryGameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
