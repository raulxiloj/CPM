import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  reporte: any = [];
  flag1: boolean = false;
  flag2: boolean = false;
  flag3: boolean = false;
  flag4: boolean = false;
  flag5: boolean = false;
  flag6: boolean = false;
  flag7: boolean = false;
  flag8: boolean = false;
  flag9: boolean = false;
  flag10: boolean = false;
  flag11: boolean = false;
  flag12: boolean = false;
  
  constructor(private reporteService: ReportsService) { }

  ngOnInit() {

  }

  report1(){
    this.reporteService.reporte1().subscribe(
      res => {
        this.reporte = res;
        this.flag1 = true;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = false;
        this.flag5 = false;
        this.flag6 = false;
        this.flag7 = false;
        this.flag8 = false;
        this.flag9 = false;
        this.flag10 = false;
        this.flag11 = false;
        this.flag12 = false;
      },
      err => console.log(err)
    )
  }

  report2(){
    this.reporteService.reporte2().subscribe(
      res => {
        this.reporte = res;
        this.flag1 = false;
        this.flag2 = true;
        this.flag3 = false;
        this.flag4 = false;
        this.flag5 = false;
        this.flag6 = false;
        this.flag7 = false;
        this.flag8 = false;
        this.flag9 = false;
        this.flag10 = false;
        this.flag11 = false;
        this.flag12 = false;
      },
      err => console.log(err)
    )
  }

  report3(){
    this.reporteService.reporte3().subscribe(
      res => {
        this.reporte = res;
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = true;
        this.flag4 = false;
        this.flag5 = false;
        this.flag6 = false;
        this.flag7 = false;
        this.flag8 = false;
        this.flag9 = false;
        this.flag10 = false;
        this.flag11 = false;
        this.flag12 = false;
      },
      err => console.log(err)
    )
  }

  report4(){
    this.reporteService.reporte4().subscribe(
      res => {
        this.reporte = res;
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = true;
        this.flag5 = false;
        this.flag6 = false;
        this.flag7 = false;
        this.flag8 = false;
        this.flag9 = false;
        this.flag10 = false;
        this.flag11 = false;
        this.flag12 = false;
      },
      err => console.log(err)
    )
  }

  report5(){
    this.reporteService.reporte5().subscribe(
      res => {
        this.reporte = res;
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = false;
        this.flag5 = true;
        this.flag6 = false;
        this.flag7 = false;
        this.flag8 = false;
        this.flag9 = false;
        this.flag10 = false;
        this.flag11 = false;
        this.flag12 = false;
      },
      err => console.log(err)
    )
  }

  report6(){
    this.reporteService.reporte6().subscribe(
      res => {
        this.reporte = res;
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = false;
        this.flag5 = false;
        this.flag6 = true;
        this.flag7 = false;
        this.flag8 = false;
        this.flag9 = false;
        this.flag10 = false;
        this.flag11 = false;
        this.flag12 = false;
      },
      err => console.log(err)
    )
  }

  report7(){
    this.reporteService.reporte7().subscribe(
      res => {
        this.reporte = res;
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = false;
        this.flag5 = false;
        this.flag6 = false;
        this.flag7 = true;
        this.flag8 = false;
        this.flag9 = false;
        this.flag10 = false;
        this.flag11 = false;
        this.flag12 = false;
      },
      err => console.log(err)
    )
  }

  report8(){
    this.reporteService.reporte8().subscribe(
      res => {
        this.reporte = res;
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = false;
        this.flag5 = false;
        this.flag6 = false;
        this.flag7 = false;
        this.flag8 = true;
        this.flag9 = false;
        this.flag10 = false;
        this.flag11 = false;
        this.flag12 = false;
      },
      err => console.log(err)
    )
  }

  report9(){
    this.reporteService.reporte9().subscribe(
      res => {
        this.reporte = res;
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = false;
        this.flag5 = false;
        this.flag6 = false;
        this.flag7 = false;
        this.flag8 = false;
        this.flag9 = true;
        this.flag10 = false;
        this.flag11 = false;
        this.flag12 = false;
      },
      err => console.log(err)
    )
  }

  report10(){
    this.reporteService.reporte10().subscribe(
      res => {
        this.reporte = res;
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = false;
        this.flag5 = false;
        this.flag6 = false;
        this.flag7 = false;
        this.flag8 = false;
        this.flag9 = false;
        this.flag10 = true;
        this.flag11 = false;
        this.flag12 = false;
      },
      err => console.log(err)
    )
  }

  report11(){
    this.reporteService.reporte11().subscribe(
      res => {
        this.reporte = res;
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = false;
        this.flag5 = false;
        this.flag6 = false;
        this.flag7 = false;
        this.flag8 = false;
        this.flag9 = false;
        this.flag10 = false;
        this.flag11 = true;
        this.flag12 = false;
      },
      err => console.log(err)
    )
  }

  report12(){
    this.reporteService.reporte12().subscribe(
      res => {
        this.reporte = res;
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = false;
        this.flag5 = false;
        this.flag6 = false;
        this.flag7 = false;
        this.flag8 = false;
        this.flag9 = false;
        this.flag10 = false;
        this.flag11 = false;
        this.flag12 = true;
      },
      err => console.log(err)
    )
  }

}
