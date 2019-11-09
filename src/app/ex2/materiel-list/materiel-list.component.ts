import { Component, OnInit, Input } from '@angular/core';
import { Materiel } from '../Materiel';

@Component({
  selector: 'app-materiel-list',
  templateUrl: './materiel-list.component.html',
  styleUrls: ['./materiel-list.component.css']
})
export class MaterielListComponent implements OnInit {

  
  titre:string="Liste du Matériel";

  m1:Materiel= new Materiel('Scanner','e7f8','../assets/scanner.jpg',253.45,'réparé');
  m2:Materiel= new Materiel('Ecran','ec18','../assets/ecrans.jpg',403.5,'endommagé');
  m3:Materiel= new Materiel('imprimantes','imp88','../assets/imprimantes.jpg',189.5,'endommagé');
  m4:Materiel= new Materiel('Pc Portable','hp58','../assets/pcPortables.jpg',1512.8,'réparé');
  materiel=[this.m1,this.m2,this.m3,this.m4];

  /*
  [
    {nom:'Scanner', reference: 'e7f8', image: '../assets/scanner.jpg', prix: 253.45, repare:'réparé'},
    {nom:'Ecran', reference: 'ec18', image: '../assets/ecrans.jpg', prix: 403.5,repare:'endommagé'},
    {nom:'Imprimante', reference: 'imp88', image: '../assets/imprimantes.jpg', prix: 189.5, repare:'endommagé'},
    {nom:'Pc Portable', reference: 'hp58', image: '../assets/pcPortables.jpg', prix: 1512.8, repare:'réparé'}
    ];
   */

  constructor() { }

  ngOnInit() {
  }

}
