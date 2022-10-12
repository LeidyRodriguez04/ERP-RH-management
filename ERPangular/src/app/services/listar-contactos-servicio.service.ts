import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListarContactosServicioService {

  url = 'http://localhost:4000/api'

  constructor(private http:HttpClient) { 
  }
  getListarContactos(): Observable<any>{ // voir le parametre de Contactos.!!!
    return this.http.get('${this.url}/listar-contactos')
  }
}
