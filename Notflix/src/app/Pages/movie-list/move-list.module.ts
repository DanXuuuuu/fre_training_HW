import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../Shared/shared.module';
import { MovieListComponent } from './movie-list.component';
import { DetailsComponent } from '../details/details.component';
import { MovieDetailResolver } from '../../resolver/movie-detail.resolver';



const routes: Routes=[
   {path:'', component: MovieListComponent, 
   },
  //  {
  //   path:'',
  //   children:[
  //     {path:'details/:id', component:DetailsComponent, }
  //   ]
  //  }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      SharedModule,
      RouterModule.forChild(routes)
  ]
})
export class MoveListModule { }
