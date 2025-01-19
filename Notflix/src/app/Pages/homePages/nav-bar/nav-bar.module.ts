import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../Shared/shared.module';
import { NavBarComponent } from './nav-bar.component';




const routes: Routes=[
 {path:'', component: NavBarComponent,}
]


@NgModule({
  declarations: [],
  imports: [
  CommonModule,
  SharedModule,
  RouterModule.forChild(routes)
  ]
})
export class NavBarModule { }
