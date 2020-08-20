import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "estudiante",
  template: `
  <div [style.background]="edad > 18 ? 'red' : 'orange'"
       style="float: left; margin: 10px; padding: 10px;">

	  <p>Nombre: {{nombre | uppercase}}</p>
	  <p>Edad: {{edad}}</p>
	  <p>Grado: {{grado === 'P' ? 'primaria' : 'secundaria'}}</p>

	  <button (click)="onInscribir()" [disabled]="edad > 18">
      Inscribir
    </button>
  </div>
  `
})
export class EstudianteComponent {
  @Input() nombre: string;
  @Input() edad: number;
  @Input() grado: string;
  @Output() inscribir = new EventEmitter();

  constructor() {}

  onInscribir() {
    this.inscribir.emit();
  }

}
