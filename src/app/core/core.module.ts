import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { CoreRoutingModule } from './core-routing.module';




@NgModule({
  declarations: [AcceuilComponent, LoginComponent],
  exports:[LoginComponent,AcceuilComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
