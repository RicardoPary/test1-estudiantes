import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EstudianteComponent } from './estudiante/estudiante.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EstudianteComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
