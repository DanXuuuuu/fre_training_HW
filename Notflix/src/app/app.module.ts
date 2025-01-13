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

@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    MovieListComponent,
    TruncatePipe,
    NavBarComponent, 
    FeatureComponent,
    DownloadPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
