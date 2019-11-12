import { Component, OnInit, Input } from '@angular/core';
import { ServiceGenService } from 'src/app/core/services/service-gen.service';
import { Client } from 'src/app/core/models/client';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const url="http://localhost:3000/client";

@Component({
  selector: 'grg-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  
  listeclients:Observable<Client[]>;
  public nom :string;
  public prenom :string;

  constructor(private servicegen:ServiceGenService<Client>, private router:Router) {
    // this.nom=this.listeclients[this.nom];

   }

  
  refresh(){
    this.listeclients = this.servicegen.getall(url);
  }

  ngOnInit() {
    this.refresh();
  }
  doModifier(){
    let cl : Client = {
    id:0,
    nom:this.nom,
    prenom:this.prenom
    };
    this.servicegen.put(url,cl.id, cl).subscribe(
      ()=> this.refresh()
    );
    this.router.navigate(['/comm/client'])
  }
  

}
