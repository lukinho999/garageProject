import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock/stock.component';
import { MecaRoutingModule } from './meca-routing.module';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { TacheComponent } from './tache/tache.component';



@NgModule({
  declarations: [
    StockComponent, 
    StockDetailComponent, 
    TacheComponent
  ],
  imports: [
    CommonModule,
    MecaRoutingModule
    
  ]
})
export class MecanicienModule { }
