import { Component, OnInit } from '@angular/core';

import { InventosService } from '../../services/inventos.service'

@Component({
  selector: 'app-inventos-list',
  templateUrl: './inventos-list.component.html',
  styleUrls: ['./inventos-list.component.css']
})
export class InventosListComponent implements OnInit {

  inventos: any = [];

  constructor(private inventoService: InventosService) { }

  ngOnInit() {
    this.inventoService.getInventos().subscribe(
      res => {
        this.inventos = res;
      },
      err => console.error(err)
    )
  }

}
