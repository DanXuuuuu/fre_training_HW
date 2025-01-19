import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from '../Pages/movie-item/movie-item.component';
import { MovieListComponent } from '../Pages/movie-list/movie-list.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { NavBarComponent } from '../Pages/homePages/nav-bar/nav-bar.component';
import { FeatureComponent } from '../Pages/homePages/feature/feature.component';
import { DownloadPageComponent } from '../Pages/homePages/download-page/download-page.component';
import { LoginPageComponent } from '../Pages/login-page/login-page.component';
import { RegisterComponent } from '../Pages/registerPages/register/register.component';
import { ApiKeyComponent } from '../Pages/registerPages/api-key/api-key.component';
import { PlanComponent } from '../Pages/registerPages/plan/plan.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { DetailsComponent } from '../Pages/details/details.component';
import { TrailerComponent } from '../Pages/trailer/trailer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
      MovieItemComponent,
      MovieListComponent,
      TruncatePipe,
      NavBarComponent, 
      FeatureComponent,
      DownloadPageComponent,
      LoginPageComponent,
      RegisterComponent,
      ApiKeyComponent,
      PlanComponent,
      NavTopComponent,
      DetailsComponent,
      TrailerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
    MatDialogModule,
    RouterModule,
  ]
  
})
export class SharedModule { }
