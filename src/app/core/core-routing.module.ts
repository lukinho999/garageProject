import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';





const routes: Routes = [
  
  {
    path:'stock',
    loadChildren: () => import('../mecanicien/mecanicien.module').then(m => m.MecanicienModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }