import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  count: number = 0;
  history: string[] = [];
  undoStack: number[] = [];
  redoStack: number[] = [];

  updateCount(value: number): void {
    const previousCount = this.count;
    this.count += value;

    if (this.undoStack.length >= 50) {
      this.undoStack.shift();
    }
    this.undoStack.push(value);

    this.redoStack = [];

    const action = value > 0 ? `+${value}` : `${value}`;
    this.history.push(`${action} (${previousCount} -> ${this.count})`);
  }

  undo(): void {
    if (this.undoStack.length === 0) return;

    const lastAction = this.undoStack.pop();
    if (lastAction !== undefined) {
      const previousCount = this.count;
      this.count -= lastAction;

      this.redoStack.push(lastAction);

      this.history.pop(); // Remove the last action
      const action =
        lastAction > 0 ? `-${lastAction}` : `+${Math.abs(lastAction)}`;
      this.history.push(`${action} (${previousCount} -> ${this.count})`);
    }
  }

  redo(): void {
    if (this.redoStack.length === 0) return;

    const lastUndoneAction = this.redoStack.pop();
    if (lastUndoneAction !== undefined) {
      const previousCount = this.count;
      this.count += lastUndoneAction;

      this.undoStack.push(lastUndoneAction);

      const action =
        lastUndoneAction > 0 ? `+${lastUndoneAction}` : `${lastUndoneAction}`;
      this.history.push(`${action} (${previousCount} -> ${this.count})`);
    }
  }
}
