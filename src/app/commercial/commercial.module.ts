import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './components/client/client.component';
import { AcceuilComponent } from '../core/acceuil/acceuil.component';
import { CommercialRoutingModule } from './commercial-routing.module';
import { CoreModule } from '../core/core.module';
import { StockVComponent } from './components/stock-v/stock-v.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { DevisComponent } from './components/devis/devis.component';
import { AddDevisComponent } from './components/add-devis/add-devis.component';
import { EditDevisComponent } from './components/edit-devis/edit-devis.component';




@NgModule({
  declarations: [ClientComponent, StockVComponent, EditClientComponent, AddClientComponent, DevisComponent, AddDevisComponent, EditDevisComponent],
  imports: [
    CommonModule,
    CommercialRoutingModule,
    CoreModule
  ]
})
export class CommercialModule { }
