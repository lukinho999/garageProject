import { Component, OnInit, Input } from '@angular/core';
import { ServiceGenService } from 'src/app/core/services/service-gen.service';
import { Client } from 'src/app/core/models/client';
import { Router,  ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
import { ClientComponent } from '../client/client.component';

const url="http://localhost:8080/rest/Clients";

@Component({
  selector: 'grg-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  
  client : Client;
  public nom :string;
  public prenom :string;
  public adresse:string;
	public codePostal:string;
	public ville:string;
	public telephone:string;
	public mobile:string;

  constructor(private servicegen:ServiceGenService<Client>, private router:Router,private route:ActivatedRoute) {
    // this.nom=this.listeclients[this.nom];
    this.client ={
      id:0,
      nom:"",
      prenom:"",
      adresse:"",
      codePostal:"",
      ville:"",
      telephone:"",
      mobile:"",
      employe: {
        civilite:"Mr",
        id:1,
        motDePasse:"",
        numeroEmploye:"",
        nom:"",
        prenom:""
      }
      };
      this.route.params.subscribe((param: {id:number}) => 
      this.servicegen.getall(url).pipe(
        map((data)=>data.filter((item)=>param.id == item.id))).subscribe((data)=>
        {
          this.client = data[0];
        console.log(this.client);
        }));
    

   }

  
  refresh(){
   // this.listeclients = this.servicegen.getall(url);
  }

  ngOnInit() {
   // this.refresh();
  }
  doModifier(){
    let cl : Client = {
    id:this.client.id,
    nom:this.client.nom,
    prenom:this.client.prenom,
    adresse:this.client.adresse,
	  codePostal:this.client.codePostal,
	  ville:this.client.ville,
	  telephone:this.client.telephone,
    mobile:this.client.mobile,
    employe: {
      civilite:"Mr",
      id:1,
      motDePasse:"",
      numeroEmploye:"",
      nom:"",
      prenom:""
    }
    };
    this.servicegen.put(url,cl.id, cl).subscribe(
      ()=> this.router.navigate(['/comm/client'])
    );
    
  }
  

}

