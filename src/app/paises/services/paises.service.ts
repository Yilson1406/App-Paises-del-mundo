import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paises } from '../interfaces/paies.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private URLBASE :string ='https://restcountries.com/v3.1/';
  constructor(private _http:HttpClient) {

   }

  buscarpais(termino:string):Observable<Paises[]>{

    const url =`${this.URLBASE}name/${termino}`;
   return this._http.get<Paises[]>(url);

  }
  buscarcapital(termino:string):Observable<Paises[]>{

    const url =`${this.URLBASE}capital/${termino}`;
   return this._http.get<Paises[]>(url);

  }
  pais(termino:string):Observable<Paises>{

    const url =`${this.URLBASE}alpha/${termino}`;
   return this._http.get<Paises>(url);

  }

}
