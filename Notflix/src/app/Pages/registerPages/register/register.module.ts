import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { ApiKeyComponent } from '../api-key/api-key.component';
import { PlanComponent } from '../plan/plan.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../Shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes =[
  {path:'',component:RegisterComponent},
    
 {
  path: '', 
  children :[
   
    {path:'api-key',component:ApiKeyComponent},
    {path:'plan',component:PlanComponent},
    

  ]
}

]

@NgModule({
  declarations: [
    RegisterComponent,
    ApiKeyComponent,
    PlanComponent
  

 ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)

  ]
})
export class RegisterModule {   

 }
