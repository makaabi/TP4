import { Component, OnInit, Input } from '@angular/core';
import { Materiel } from '../Materiel';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
  /*
  @Input('nom')nom:string;
  @Input('reference')reference:string;
  @Input('image')image:string;
  @Input('prix')prix:number;
  @Input('repare')repare:string;
  modif()
  {
    this.repare="réparé";
  }

  */
 @Input('mat') materiel: Materiel;
 modif()
 {
   this.materiel.setetat("réparé");
 }

  
  constructor() { }

  ngOnInit() {
  }

}
