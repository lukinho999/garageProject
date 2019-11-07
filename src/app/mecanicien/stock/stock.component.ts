import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'grg-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  displayDetails(){
    this.router.navigate(['/meca/stockdet']);
  }

}
