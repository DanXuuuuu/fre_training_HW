import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './Shared/shared.module';
import { MovieDetailResolver } from './resolver/movie-detail.resolver';
import { UpgradePlanComponent } from './Pages/upgrade-plan/upgrade-plan.component';
 

@NgModule({
  declarations: [
    AppComponent,
    UpgradePlanComponent,
   
 


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
 
   
   
  ],
  providers: [
    provideAnimationsAsync(),[MovieDetailResolver]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
