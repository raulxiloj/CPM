import { Component, OnInit } from '@angular/core';
import { ProfsService } from 'src/app/services/profs.service';

@Component({
  selector: 'app-profs-list',
  templateUrl: './profs-list.component.html',
  styleUrls: ['./profs-list.component.css']
})
export class ProfsListComponent implements OnInit {

  constructor(private profsService: ProfsService) { }

  profesionales: any = [];

  ngOnInit() {
    this.profsService.getProfesionales().subscribe(
      res => {
        this.profesionales = res;
      },
      err => console.error(err)
    )
  }

}
