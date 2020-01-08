import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-paises-list',
  templateUrl: './paises-list.component.html',
  styleUrls: ['./paises-list.component.css']
})
export class PaisesListComponent implements OnInit {

  paises: any = [];

  constructor(private paisService: PaisesService) { }

  ngOnInit() {
    this.paisService.getPaises().subscribe(
      res => {
        this.paises = res;
      },
      err => console.log(err)
    )
  }

}
