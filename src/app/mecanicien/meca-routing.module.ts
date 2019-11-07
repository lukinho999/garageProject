import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { TacheComponent } from './tache/tache.component';
import { AcceuilComponent} from '../core/acceuil/acceuil.component';
/**
 * Créer un composant MecaComponent avec juste la partie Meca de AccueilCommponent
 * Créer un composant CommComponent avec jsute la partie Commercial de AccueilComponent
 */
const routes: Routes = [
  {
    path:'', component: AcceuilComponent
  },
  {
    path:'stockdet', component: StockDetailComponent
  },
  {
    path:'stock', component: StockComponent
  },
  {
    path:'tache', component: TacheComponent
  }
  ];
   
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MecaRoutingModule { }