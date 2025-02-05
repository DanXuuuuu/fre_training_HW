import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from '../Pages/movie-item/movie-item.component';
import { MovieListComponent } from '../Pages/movie-list/movie-list.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { NavBarComponent } from '../Pages/homePages/nav-bar/nav-bar.component';
import { FeatureComponent } from '../Pages/homePages/feature/feature.component';
import { DownloadPageComponent } from '../Pages/homePages/download-page/download-page.component';
import { LoginPageComponent } from '../Pages/login-page/login-page.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { DetailsComponent } from '../Pages/details/details.component';

import { ReactiveFormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 



@NgModule({
  declarations: [
      MovieItemComponent,
      MovieListComponent,
      TruncatePipe,
      NavBarComponent, 
      FeatureComponent,
      DownloadPageComponent,
      LoginPageComponent,
      NavTopComponent,
      DetailsComponent, 
      ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
    MatDialogModule,
    RouterModule,
    InfiniteScrollModule,
    MatProgressSpinnerModule
 
  ]
  ,exports: [
    MovieItemComponent,
    MovieListComponent,
    TruncatePipe,
    NavBarComponent,
    FeatureComponent,
    DownloadPageComponent,
    LoginPageComponent,
    NavTopComponent,
    DetailsComponent,
    ReactiveFormsModule,
    YouTubePlayerModule,
    MatDialogModule,
    RouterModule
  ]
  
})
export class SharedModule { }
