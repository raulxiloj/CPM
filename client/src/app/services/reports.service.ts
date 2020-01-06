import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  API_URI = 'http://localhost:3000/reportes'

  constructor(private http: HttpClient) { }

  reporte1(){
    return this.http.get(`${this.API_URI}/1`);
  }

  reporte2(){
    return this.http.get(`${this.API_URI}/2`);
  }

  reporte3(){
    return this.http.get(`${this.API_URI}/3`);
  }

  reporte4(){
    return this.http.get(`${this.API_URI}/4`);
  }

  reporte5(){
    return this.http.get(`${this.API_URI}/5`);
  }

  reporte6(){
    return this.http.get(`${this.API_URI}/6`);
  }

  reporte7(){
    return this.http.get(`${this.API_URI}/7`);
  }

  reporte8(){
    return this.http.get(`${this.API_URI}/8`);
  }

  reporte9(){
    return this.http.get(`${this.API_URI}/9`);
  }

  reporte10(){
    return this.http.get(`${this.API_URI}/10`);
  }

  reporte11(){
    return this.http.get(`${this.API_URI}/11`);
  }

  reporte12(){
    return this.http.get(`${this.API_URI}/12`);
  }

}
