import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MarketingComponent } from './marketing/marketing.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [  { 
  path: 'home', component: HomeComponent },
  {path: 'marketing', component: MarketingComponent },
  {path: '', component: MainComponent}
,];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
