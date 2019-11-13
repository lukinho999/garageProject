import { Component, OnInit } from '@angular/core';
import { Devis } from '../../models/devis';
import { ServiceGenService } from 'src/app/core/services/service-gen.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Client } from 'src/app/core/models/client';

const url="http://localhost:3000/devis";

@Component({
  selector: 'grg-edit-devis',
  templateUrl: './edit-devis.component.html',
  styleUrls: ['./edit-devis.component.css']
})
export class EditDevisComponent implements OnInit {

  devis: Devis;
  public numerodevis: string;
  public client: Client;
  public reference:string;
  

  constructor(private servicegen:ServiceGenService<Devis>, private router:Router,private route:ActivatedRoute) { 

    this.devis ={
    id:0,
    numerodevis:"",
    client:[],
    reference:""
  };
  this.route.params.subscribe((param: {id:number}) => 
      this.servicegen.getall(url).pipe(
        map((data)=>data.filter((item)=>param.id == item.id))).subscribe((data)=>
        {
          this.devis = data[0];
        console.log(this.devis);
        }));

}

  ngOnInit() {
  }
  doModifier(){
    let d : Devis = {
    id:this.devis.id,
    numerodevis:this.devis.numerodevis,
    client:this.devis.client,
    reference:this.devis.reference
    };
    this.servicegen.put(url,d.id, d).subscribe(
      ()=> this.router.navigate(['/comm/devis'])
    );
    
  }

}
