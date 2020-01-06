import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InventosService {

  API_URI = 'http://localhost:3000/invento'

  constructor(private http: HttpClient) { }

  getInventos(){
    return this.http.get(`${this.API_URI}`);
  }

}
