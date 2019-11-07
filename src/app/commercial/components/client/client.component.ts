import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'grg-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  displayDetails(){
    this.router.navigate(['/comm/editClient'])
  }
  addCustomer(){
    this.router.navigate(['/comm/addClient'])
  }

}
