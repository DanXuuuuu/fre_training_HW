import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page.component';
import { SharedModule } from '../../Shared/shared.module';



const routes: Routes =[
  {path:'', component: LoginPageComponent,}
]
// canActivate:[LoginGuard]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
     RouterModule.forChild(routes)
   
  ],
 
})
export class LoginPageModule { }
