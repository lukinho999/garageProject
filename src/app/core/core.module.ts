import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { CoreRoutingModule } from './core-routing.module';
import { AcceuilComponent } from './acceuil/acceuil.component';




@NgModule({
  declarations: [LoginComponent,AcceuilComponent],
  exports:[LoginComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
