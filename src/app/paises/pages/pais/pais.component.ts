import { Component, OnInit } from '@angular/core';
import { Paises } from '../../interfaces/paies.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [
    `ul,li{
      cursor:pointer;
    }`
  ]
})
export class PaisComponent implements OnInit {
  error:boolean=false;
  termino:string='';
  paises:Paises[]=[];
  sugeridos:Paises[]=[];
  mostrar:boolean=false;
  constructor(private _paises:PaisesService) { }

  ngOnInit(): void {
  }
  buscar(termino:string){
    this.error=false
    this.termino =termino
    this._paises.buscarpais(this.termino)
    .subscribe({
      next:(data) =>{
        this.paises=data;
          console.log(this.paises);
        },
      error:(err)=>{this.error=true; this.paises = []}
      })
    }
    sugerencias(termino:string){
      this.termino= termino
      this.mostrar = true;
      this._paises.buscarpais(termino)
      .subscribe({
        next:pis=>{
          this.sugeridos =pis
        }
      })
    }

}
