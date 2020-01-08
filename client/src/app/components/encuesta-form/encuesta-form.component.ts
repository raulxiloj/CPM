import { Component, OnInit } from '@angular/core';
import { EncuestasService } from 'src/app/services/encuestas.service';

@Component({
  selector: 'app-encuesta-form',
  templateUrl: './encuesta-form.component.html',
  styleUrls: ['./encuesta-form.component.css']
})
export class EncuestaFormComponent implements OnInit {

  encuestas: any = [];
  preguntas: any = [];
  flag: boolean = false;
  nuevaEncuesta: string = "";
  nuevaPregunta: string = "";
  actual: number = 0;

  constructor(private encuestaService: EncuestasService) { }

  ngOnInit() {
    this.encuestaService.getEncuestas().subscribe(
      res => {
        this.encuestas = res;
      },
      err => console.log(err)
    )
  }
  
  getPreguntas(encuesta: any){
    this.preguntas = encuesta.preguntas;
    this.flag = true;
    this.actual = encuesta.id;
  }

  crearEncuesta(){
    if(this.nuevaEncuesta !== ""){
      const encuesta = {
        nombre: this.nuevaEncuesta
      }
      this.encuestaService.nuevaEncuesta(encuesta).subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
          this.nuevaEncuesta = "";
        },
        err => console.log(err)
      )
    }
  }

  agregarPregunta(){
    if(this.nuevaPregunta !== ""){
      const pregunta = {
        id : this.actual,
        nombre: this.nuevaPregunta
      }
      this.encuestaService.agregarPregunta(pregunta).subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
          this.nuevaPregunta = "";
        },
        err => console.log(err)
      )
    }
  }

}
