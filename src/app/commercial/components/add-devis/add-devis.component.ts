import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Devis } from '../../models/devis';
import { ServiceGenService } from 'src/app/core/services/service-gen.service';
import { Router } from '@angular/router';
import { Client } from '../../../core/models/client';


const url="http://localhost:3000/devis";

@Component({
  selector: 'grg-add-devis',
  templateUrl: './add-devis.component.html',
  styleUrls: ['./add-devis.component.css']
})
export class AddDevisComponent implements OnInit {

  public numerodevis: string;
  public client: Client[];
  public reference:string;

  listedevis:Observable<Devis[]>;

  constructor(private servicegen:ServiceGenService<Devis>, private router:Router) { }

  refresh(){
    this.listedevis = this.servicegen.getall(url);
  }

  ngOnInit() {
  }
  doCreer(){
    let d : Devis = {
    id:0,
    numerodevis:this.numerodevis,
    client:this.client,
    reference:this.reference
    };
    this.servicegen.post(url,d).subscribe(
      ()=> this.refresh()
    );
    this.router.navigate(['/comm/devis'])
  }

}
