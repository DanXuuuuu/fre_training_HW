import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo.service';
import { FormsModule } from '@angular/forms';
import { ChangeTitleComponent } from './change-title/change-title.component';
import { ChangeTitleCardComponent } from './change-title-card/change-title-card.component';
import { ChangeListComponent } from './change-list/change-list.component';
import { ChangeListCardComponent } from './change-list-card/change-list-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    ChangeTitleComponent,
    ChangeTitleCardComponent,
    ChangeListComponent,
    ChangeListCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, FormsModule]

  ,
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
