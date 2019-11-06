import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock/stock.component';
import { MecaRoutingModule } from './meca-routing.module';
import { CoreRoutingModule } from '../core/core-routing.module';
import { StockDetailComponent } from './stock-detail/stock-detail.component';



@NgModule({
  declarations: [StockComponent, StockDetailComponent],
  imports: [
    CommonModule,
    MecaRoutingModule
    
  ]
})
export class MecanicienModule { }
