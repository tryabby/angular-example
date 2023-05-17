import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MarketingComponent } from './marketing/marketing.component';
import { MainComponent } from './main/main.component';
import { RoutingComponent } from './routing/routing.component';
// import { AbbyModule } from '@tryabby/angular'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MarketingComponent,
    MainComponent,
    RoutingComponent, 
    // AbbyModule.forRoot(abby)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
