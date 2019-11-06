import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { AcceuilComponent } from './core/acceuil/acceuil.component';


const routes: Routes = [
{
  path: '',
  component: LoginComponent
},
{
  path:'acceuil', component: AcceuilComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
