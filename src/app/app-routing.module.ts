import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgenceComponent } from './agence/agence.component';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { CompteComponent } from './compte/compte.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  /*{path: 'agence', component: AgenceComponent},
  {path: 'client', component: ClientComponent},
  {path: 'compte', component: CompteComponent},*/
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
