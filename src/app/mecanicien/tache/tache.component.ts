import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tache } from '../models/tache';
import { ServiceGenService } from 'src/app/core/services/service-gen.service';
import { Router } from '@angular/router';

const url="http://localhost:8080/rest/Taches";

@Component({
  selector: 'grg-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {
  listetaches:Observable<Tache[]>;
  constructor(private router: Router,private servicegen:ServiceGenService<Tache>) { }

  refresh(){
    this.listetaches = this.servicegen.getall(url);
  }

  ngOnInit() {
    this.refresh();
  }

}
