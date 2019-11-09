import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './application/parent/parent.component';
import { EnfantComponent } from './application/enfant/enfant.component';
import { TableauComponent } from './ex1/tableau/tableau.component';
import { NombreComponent } from './ex1/nombre/nombre.component';
import { MaterielComponent } from './ex2/materiel/materiel.component';
import { MaterielListComponent } from './ex2/materiel-list/materiel-list.component';
import { NotesComponent } from './notes/notes.component';
import { DonComponent } from './ex4/don/don.component';
import { ListeDonsComponent } from './ex4/liste-dons/liste-dons.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    EnfantComponent,
    TableauComponent,
    NombreComponent,
    MaterielComponent,
    MaterielListComponent,
    NotesComponent,
    DonComponent,
    ListeDonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
