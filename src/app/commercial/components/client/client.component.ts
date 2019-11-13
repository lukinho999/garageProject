import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceGenService } from 'src/app/core/services/service-gen.service';
import { Client } from 'src/app/core/models/client';
import { Observable } from 'rxjs';

const url="http://localhost:8080/rest/Clients";

@Component({
  selector: 'grg-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  listeclients:Observable<Client[]>;
  constructor(private router: Router,private servicegen:ServiceGenService<Client>) { }

  refresh(){
    this.listeclients = this.servicegen.getall(url);
  }

  ngOnInit() {
    this.refresh();
  }

  displayDetails(id:number){
    this.router.navigate(['/comm/editClient', id])
  }
  addCustomer(){
    this.router.navigate(['/comm/addClient'])
  }
  doDelete(id:number){

    this.servicegen.delete(url, id).subscribe(
      ()=> this.refresh()
    );
  }
  

}
