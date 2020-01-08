import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {

  API_URI = 'http://localhost:3000/encuestas'

  constructor(private http: HttpClient) { }

  getEncuestas(){
    return this.http.get(`${this.API_URI}/getEncuestas`);
  }

  nuevaEncuesta(data: Object){
    return this.http.post(`${this.API_URI}/nuevaEncuesta`,data)
  }

  agregarPregunta(data: Object){
    return this.http.post(`${this.API_URI}/agregarPregunta`,data);
  }

  encuestaPregunta(data: Object){

  }

}
