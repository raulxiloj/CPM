import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import { ProfsService } from 'src/app/services/profs.service';
import { InventosService } from 'src/app/services/inventos.service';

@Component({
  selector: 'app-invento-form',
  templateUrl: './invento-form.component.html',
  styleUrls: ['./invento-form.component.css']
})
export class InventoFormComponent implements OnInit {

  paises: any = [];
  profesionales: any = [];
  invento = {
    nombre: '',
    pais: '',
    anio: '',
    prof: ''
  }

  constructor(private paisService: PaisesService, private profsService: ProfsService,private inventoService: InventosService) { }

  ngOnInit() {
    this.paisService.getPaises().subscribe(
      res => {
        this.paises = res;
      },
      err => console.log(err)
    )
    this.profsService.getProfesionales().subscribe(
      res => {
        this.profesionales = res;
      }
    )
  }

  registrarInvento(){
    const data = {
      nombre: this.invento.nombre,
      pais: parseInt(this.invento.pais),
      anio: parseInt(this.invento.anio),
      prof: parseInt(this.invento.prof)
    }
    this.inventoService.agregarInvento(data).subscribe(
      res => {
        this.invento.nombre = '';
        this.invento.anio = '';
        this.invento.pais = '';
        this.invento.prof = '';
      },
      err => console.log(err)
    )
  }

}
