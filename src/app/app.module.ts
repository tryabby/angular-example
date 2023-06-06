import { APP_INITIALIZER, Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MarketingComponent } from './marketing/marketing.component';
import { MainComponent } from './main/main.component';
import { RoutingComponent } from './routing/routing.component';
import { AbbyModule } from '@tryabby/angular'


const abby = {
  projectId: "clg0i3xdc0000mfh7lg0mbvnf",
  currentEnvironment: "default",
  tests: {
    Home: {
      variants: ["A", "B", "C"],
    },
    Marketing: {
      variants: ["b", "c", "original"],
    },
  },
  flags: ["clientFlag", "serverFlag"],
}
  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MarketingComponent,
    MainComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule, 
    AbbyModule.forRoot(abby)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
