import { Component, OnInit } from '@angular/core';
import { EncuestasService } from 'src/app/services/encuestas.service';

@Component({
  selector: 'app-encuestas-list',
  templateUrl: './encuestas-list.component.html',
  styleUrls: ['./encuestas-list.component.css']
})
export class EncuestasListComponent implements OnInit {

  encuestas: any = [];

  constructor(private encuestaService: EncuestasService) { }

  ngOnInit() {
    this.encuestaService.getEncuestas().subscribe(
      res => {
        this.encuestas = res;
      },
      err => console.log(err)
    )
  }

}
