import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from '../core/acceuil/acceuil.component';
import { StockVComponent } from './components/stock-v/stock-v.component';
import { ClientComponent } from './components/client/client.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { DevisComponent } from './components/devis/devis.component';
import { AddDevisComponent } from './components/add-devis/add-devis.component';
import { EditDevisComponent } from './components/edit-devis/edit-devis.component';


const routes: Routes = [
  {
    path:'', component: AcceuilComponent
  },
  {
    path:'stockV', component: StockVComponent
  },
  {
    path:'client', component: ClientComponent
  },
  {
    path:'addClient', component: AddClientComponent
  },
  {
    path:'editClient/:id', component: EditClientComponent
  },
  {
    path:'devis', component: DevisComponent
  },
  {
    path:'addDevis', component: AddDevisComponent
  },
  {
    path:'editDevis', component: EditDevisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommercialRoutingModule { }