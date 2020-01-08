import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  API_URI = 'http://localhost:3000/paises'

  constructor(private http: HttpClient) { }

  getPaises(){
    return this.http.get(`${this.API_URI}/getPaises`);
  }

  getRegiones(){
    return this.http.get(`${this.API_URI}/getRegiones`);
  }

  agregarPais(data: Object){
    return this.http.post(`${this.API_URI}/agregarPais`,data);
  }

}
