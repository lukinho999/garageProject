import { Component, OnInit } from '@angular/core';
import { ServiceGenService } from '../../services/service-gen.service';
import { Client } from '../../models/client';
import { Observable } from 'rxjs';

const url="http://localhost:3000/client";

@Component({
  selector: 'grg-clientcrud',
  templateUrl: './clientcrud.component.html',
  styleUrls: ['./clientcrud.component.css']
})
export class ClientcrudComponent implements OnInit {
  listeclients:Observable<Client[]>;

  constructor(private servicegen:ServiceGenService<Client>) { }

  refresh(){
    this.listeclients = this.servicegen.getall(url);
  }

  ngOnInit() {
    this.refresh();
  }
  doCreer(){
    let cl : Client = {
    id:0,
    nom:"NCreation",
    prenom:"PCreation"
    };
    this.servicegen.post(url,cl).subscribe(
      ()=> this.refresh()
    );
  }
  doDelete(){

    this.servicegen.delete(url, 3).subscribe(
      ()=> this.refresh()
    );
  }
  doModifier(){
    let cl : Client = {
    id:4,
    nom:"NCreation 444",
    prenom:"PCreation 444"
    };
    this.servicegen.put(url,cl.id, cl).subscribe(
      ()=> this.refresh()
    );
  }


}
