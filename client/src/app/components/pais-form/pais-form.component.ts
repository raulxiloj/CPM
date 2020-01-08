import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-pais-form',
  templateUrl: './pais-form.component.html',
  styleUrls: ['./pais-form.component.css']
})
export class PaisFormComponent implements OnInit {

  regiones: any = [];
  pais = {
    nombre: '',
    poblacion: null,
    area: null,
    region: 'Elegir region',
    id_region: null
  }
  nuevoPais: string = "";

  constructor(private paisService: PaisesService) { }

  ngOnInit() {
    this.paisService.getRegiones().subscribe(
      res => {
        this.regiones = res;
      },
      err => console.log(err)
    )
  }

  agregarPais(){
    const data = {
      nombre: this.pais.nombre,
      poblacion: parseInt(this.pais.poblacion),
      area: parseInt(this.pais.area),
      region: parseInt(this.pais.id_region)
    }
    this.paisService.agregarPais(data).subscribe(
      res => {
        this.pais.nombre = "",
        this.pais.poblacion = null,
        this.pais.area = null,
        this.pais.id_region = null;
      },
      err => console.log(err)
    )
  }

}
