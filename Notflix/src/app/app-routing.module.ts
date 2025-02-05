import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailResolver } from './resolver/movie-detail.resolver';
import { AuthGuard } from './Core/guard/auth.guard';
import { RoleGuard } from './Core/guard/role.guard';
import { FeatureComponent } from './Pages/homePages/feature/feature.component';


const routes: Routes = [

  { path: 'register', loadChildren:()=> import('./Pages/registerPages/register/register.module').then((m)=>m.RegisterModule)
  
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./Pages/details/details.module').then(
        (m) => m.DetailsModule
      ),
    resolve:{movie:MovieDetailResolver},
    canActivate:[RoleGuard]
  },
  { path: 'list', loadChildren:()=> import('./Pages/movie-list/move-list.module').then((m)=>m.MoveListModule),
    canActivate:[AuthGuard]
  },

  { path: 'home', component:FeatureComponent},
  
  { path: 'login', loadChildren:()=> import('./Pages/login-page/login-page.module').then((m)=>m.LoginPageModule)},

  { path: '', redirectTo: '/home', pathMatch: 'full' }

];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }