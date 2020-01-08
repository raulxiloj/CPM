import { Component, OnInit } from '@angular/core';
import { InventoresService } from 'src/app/services/inventores.service';

@Component({
  selector: 'app-inventores-list',
  templateUrl: './inventores-list.component.html',
  styleUrls: ['./inventores-list.component.css']
})
export class InventoresListComponent implements OnInit {

  inventores: any = [];

  constructor(private inventSerivce: InventoresService) { }

  ngOnInit() {
    this.inventSerivce.getInventores().subscribe(
      res => {
        this.inventores = res;
      },
      err => console.error(err)
    )
  }

}
