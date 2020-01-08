import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InventoresService {

  API_URI = 'http://localhost:3000/inventores'

  constructor(private http: HttpClient) { }

  getInventores(){
    return this.http.get(`${this.API_URI}/getInventores`);
  }

  registrarInventor(data: Object){
    return this.http.post(`${this.API_URI}/agregarInvento`,data);
  }

}
