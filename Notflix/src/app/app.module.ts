import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from './truncate.pipe';
import { NavBarComponent } from './components/homePages/nav-bar/nav-bar.component';
import { FeatureComponent } from './components/homePages/feature/feature.component';
import { DownloadPageComponent } from './components/homePages/download-page/download-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterComponent } from './components/registerPages/register/register.component';
import { ApiKeyComponent } from './components/registerPages/api-key/api-key.component';
import { PlanComponent } from './components/registerPages/plan/plan.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavTopComponent } from './components/homePages/nav-top/nav-top.component';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './components/details/details.component';
import { TrailerComponent } from './components/trailer/trailer.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatDialogModule } from '@angular/material/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    AppComponent,
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
    TrailerComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    YouTubePlayerModule,
    MatDialogModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
