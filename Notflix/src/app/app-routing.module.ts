import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/registerPages/register/register.component';
import { PlanComponent } from './components/registerPages/plan/plan.component';
import { ApiKeyComponent } from './components/registerPages/api-key/api-key.component';
import { DetailsComponent } from './components/details/details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { FeatureComponent } from './components/homePages/feature/feature.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
 

const routes: Routes = [

  { path: 'register', component: RegisterComponent },
  { path: 'api-key', component: ApiKeyComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'list', component: MovieListComponent },
  { path: 'home', component: FeatureComponent},
  { path: 'login', component: LoginPageComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
