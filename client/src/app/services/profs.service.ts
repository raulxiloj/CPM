import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfsService {

  API_URI = 'http://localhost:3000/profs'

  constructor(private http: HttpClient) { }

  getProfesionales(){
    return this.http.get(`${this.API_URI}/getProfs`);
  }

  agregarProfesional(data: Object){
    return this.http.post(`${this.API_URI}/agregarProfesional`,data);
  }

}
