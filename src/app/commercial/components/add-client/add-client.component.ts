import { Component, OnInit } from '@angular/core';
import { ServiceGenService } from 'src/app/core/services/service-gen.service';
import { Client } from 'src/app/core/models/client';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


const url="http://localhost:8080/rest/Clients";

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
  public adresse:string;
	public codePostal:string;
	public ville:string;
	public telephone:string;
	public mobile:string;
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
    prenom:this.prenom,
    adresse:this.adresse,
	  codePostal:this.codePostal,
	  ville:this.ville,
	  telephone:this.telephone,
    mobile:this.mobile,
    employe: {
      civilite:"Mr",
      id:1,
      motDePasse:"",
      numeroEmploye:"",
      nom:"",
      prenom:""
    }
    };
    this.servicegen.post(url,cl).subscribe(
      ()=> this.router.navigate(['/comm/client'])
    );
    
  }


}
