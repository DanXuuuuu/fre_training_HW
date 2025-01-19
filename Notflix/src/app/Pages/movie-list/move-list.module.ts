import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../Shared/shared.module';
import { MovieListComponent } from './movie-list.component';



const routes: Routes=[
   {path:'', component: MovieListComponent, 
    // canActivate:[MoivesGuard],
   }
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
