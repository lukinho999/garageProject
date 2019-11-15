import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { AppComponent } from './app.component';

/**
 * ,
{
  path:'acceuil', component: AcceuilComponent,
}
 */

const routes: Routes = [
{
  path: '',
  component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
