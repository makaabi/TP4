import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  titre:string="Liste des nombres";
  tab= [10, 20, 30, 40];

  constructor() { }

  ngOnInit() {
  }

}
