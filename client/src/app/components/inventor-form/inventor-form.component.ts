import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import { InventoresService } from 'src/app/services/inventores.service';

@Component({
  selector: 'app-inventor-form',
  templateUrl: './inventor-form.component.html',
  styleUrls: ['./inventor-form.component.css']
})
export class InventorFormComponent implements OnInit {

  paises: any = [];
  inventor = {
    nombre: '',
    pais: null
  }

  constructor(private paisServirce: PaisesService, private inventorService: InventoresService) { }

  ngOnInit() {
    this.paisServirce.getPaises().subscribe(
      res => {
        this.paises = res;
      },
      err => console.log(err)
    )
  }

  registrarInventor(){
    const data = {
      nombre: this.inventor.nombre,
      pais: parseInt(this.inventor.pais)
    }
    this.inventorService.registrarInventor(data).subscribe(
      res => {
        this.inventor.nombre = '';
        this.inventor.pais = '';
      },
      err => console.log(err)
    )

  }

}
