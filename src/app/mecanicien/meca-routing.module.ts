import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { TacheComponent } from './tache/tache.component';

const routes: Routes = [
  {
    path:'', component: StockComponent
  },
  {
    path:'stock-detail', component: StockDetailComponent
  },
  {
    path:'', component: TacheComponent
  }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MecaRoutingModule { }