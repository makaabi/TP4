import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  
  tabNotes=[15,20,19,8,4,16.5];


  premier()
  {
    console.log(this.tabNotes[0]);
  }
  dernier()
  {
    console.log(this.tabNotes[this.tabNotes.length-1]);


  }
  constructor() { }

  ngOnInit() {
  }

}
