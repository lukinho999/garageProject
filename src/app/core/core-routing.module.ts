import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';





const routes: Routes = [
  
  {
    path:'meca',
    loadChildren: () => import('../mecanicien/mecanicien.module').then(m => m.MecanicienModule)
  },
  {
    path:'comm',
    loadChildren: () => import('../commercial/commercial.module').then(m => m.CommercialModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }