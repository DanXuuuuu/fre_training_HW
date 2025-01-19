import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './Pages/details/details.component';


const routes: Routes = [

  { path: 'register', loadChildren:()=> import('./Pages/registerPages/register/register.module').then((m)=>m.RegisterModule)
  
  },{
    path: 'details/:id',
    loadChildren: () =>
      import('./Pages/details/details.module').then(
        (m) => m.DetailsModule
      )},
  { path: 'list', loadChildren:()=> import('./Pages/movie-list/move-list.module').then((m)=>m.MoveListModule) },
  { path: 'home', loadChildren:()=>import('./Pages/homePages/nav-bar/nav-bar.module').then((m)=>m.NavBarModule)},
  { path: 'login', loadChildren:()=> import('./Pages/login-page/login-page.module').then((m)=>m.LoginPageModule)},

  { path: '', redirectTo: '/home', pathMatch: 'full' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
