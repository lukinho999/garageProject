import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Piece } from '../models/piece';
import { Observable } from 'rxjs';
import { ServiceGenService } from 'src/app/core/services/service-gen.service';

const url="http://localhost:8080/rest/Pieces";

@Component({
  selector: 'grg-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  listepieces:Observable<Piece[]>;

  constructor(private router: Router, private servicegen:ServiceGenService<Piece>) { }

  refresh(){
    this.listepieces = this.servicegen.getall(url);
  }

  ngOnInit() {
    this.refresh();
  }
  displayDetails(){
    this.router.navigate(['/meca/stockdet']);
  }

}
