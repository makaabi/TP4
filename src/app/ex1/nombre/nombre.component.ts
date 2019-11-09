import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {
  @Input('msgParent')value:number;
  @Input('msgParent2')indice:number;


  constructor() { }

  ngOnInit() {
  }

}
