import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Add this
import { LoginComponent } from './login/login.component'; // Add this
import { AddsongComponent } from './addsong/addsong.component'; // Add this
import { ListComponent } from './list/list.component'; // Add this

const routes: Routes = [
  { path: '', component: HomeComponent },              // Add this
  { path: 'login', component: LoginComponent },           // Add this
  { path: 'songs', component: ListComponent },           // Add this
  {path: 'addSongs', component: AddsongComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
