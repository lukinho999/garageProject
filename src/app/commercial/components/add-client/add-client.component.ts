import { Component, OnInit } from '@angular/core';
import { ServiceGenService } from 'src/app/core/services/service-gen.service';
import { Client } from 'src/app/core/models/client';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


const url="http://localhost:3000/client";

@Component({
  selector: 'grg-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  /*
  Créer les attributs publiques de ton formulaire
  */
  public nom :string;
  public prenom :string;
  listeclients:Observable<Client[]>;
  constructor(private servicegen:ServiceGenService<Client>, private router:Router) { }

  refresh(){
    this.listeclients = this.servicegen.getall(url);
  }

  ngOnInit() {
  }
  doCreer(){
    let cl : Client = {
    id:0,
    nom:this.nom,
    prenom:this.prenom
    };
    this.servicegen.post(url,cl).subscribe(
      ()=> this.refresh()
    );
    this.router.navigate(['/comm/client'])
  }


}
