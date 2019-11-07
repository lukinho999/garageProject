import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'grg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSubmitMeca(){
    this.router.navigate(['/meca']);
  }
  onSubmitComm(){
    this.router.navigate(['/comm']);
  }

}
