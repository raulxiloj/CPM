import { Component, OnInit } from '@angular/core';
import { ProfsService } from 'src/app/services/profs.service';

@Component({
  selector: 'app-prof-form',
  templateUrl: './prof-form.component.html',
  styleUrls: ['./prof-form.component.css']
})
export class ProfFormComponent implements OnInit {

  profesional = { 
    nombre: '',
    salario: null,
    comision: null,
    contrato: '' 
  }

  constructor(private profService: ProfsService) { }

  ngOnInit() {
  }

  registrarProfesional(){
    const data = {
      nombre: this.profesional.nombre,
      salario: parseInt(this.profesional.salario),
      comision: parseInt(this.profesional.comision),
      contrato: this.profesional.contrato
    }
    this.profService.agregarProfesional(data).subscribe(
      res => {
        this.profesional.nombre = "";
        this.profesional.salario = null;
        this.profesional.comision = null;
        this.profesional.contrato = '';
      },
      err => {
        console.log(err);
      }
    )
  }

}
