import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  inscritos = 0;

  allStudents = [
    { nombre: "juan", edad: 13, grado: "P" },
    { nombre: "marco", edad: 15, grado: "S" },
    { nombre: "maria", edad: 20, grado: "P" },
    { nombre: "marta", edad: 22, grado: "S" },
    { nombre: "omar", edad: 18, grado: "P" },
    { nombre: "miriam", edad: 16, grado: "S" },
    { nombre: "roger", edad: 18, grado: "P" },
    { nombre: "julieta", edad: 20, grado: "S" },
    { nombre: "eber", edad: 22, grado: "P" },
    { nombre: "juana", edad: 25, grado: "S" }
  ];

  students = {
    primaria: this.allStudents.filter(e => e.grado === 'P'),
    secundaria: this.allStudents.filter(e => e.grado === 'S')
  };

  verifyAllInscritos() {
    const primaria = this.students.primaria.filter(p => p.edad < 18);
    const secundaria = this.students.secundaria.filter(p => p.edad < 18);
    return primaria.length + secundaria.length === 0;
  }

  inscribir(student, tipo) {
    this.inscritos++;
    const index = this.students[tipo].findIndex(e => e === student);
    this.students[tipo].splice(index, 1);
  }
}
