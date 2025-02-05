import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details.component';
import { MovieDetailResolver } from '../../resolver/movie-detail.resolver';

const routes : Routes=[
  {path:'', component:DetailsComponent,}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
        RouterModule.forChild(routes)
  ]
})
export class DetailsModule { }
