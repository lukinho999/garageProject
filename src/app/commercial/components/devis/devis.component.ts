import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'grg-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  displayDetails(){
    this.router.navigate(['/comm/editDevis'])
  }
  addDevis(){
    this.router.navigate(['/comm/addDevis'])
  }

}
