import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockVoiture } from 'src/app/commercial/models/stock-voiture'
import { Observable } from 'rxjs';
import { ServiceGenService } from 'src/app/core/services/service-gen.service';

const url="http://localhost:8080/rest/Vehicules";

@Component({
  selector: 'grg-stock-v',
  templateUrl: './stock-v.component.html',
  styleUrls: ['./stock-v.component.css']
})
export class StockVComponent implements OnInit {
listevoitures:Observable<StockVoiture[]>;
  constructor(private servicegen:ServiceGenService<StockVoiture>) { }

  refresh(){
    this.listevoitures = this.servicegen.getall(url);
  }

  ngOnInit() {
    this.refresh();
  }

}
