import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/registerPages/register/register.component';
import { PlanComponent } from './components/registerPages/plan/plan.component';
import { ApiKeyComponent } from './components/registerPages/api-key/api-key.component';

const routes: Routes = [

  { path: 'register', component: RegisterComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'api-key', component: ApiKeyComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
