import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Devis } from '../../models/devis';
import { ServiceGenService } from 'src/app/core/services/service-gen.service';

const url="http://localhost:8080/rest/Devis";

@Component({
  selector: 'grg-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {
  listedevis:Observable<Devis[]>;

  constructor(private router: Router, private servicegen:ServiceGenService<Devis>) { }

  refresh(){
    this.listedevis = this.servicegen.getall(url);
  }

  ngOnInit() {
    this.refresh();
  }
  displayDetails(id:number){
    this.router.navigate(['/comm/editDevis', id])
  }
  addDevis(){
    this.router.navigate(['/comm/addDevis'])
  }

}
