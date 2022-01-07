import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Paises } from '../../interfaces/paies.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!:Paises
  constructor(
    private _paises :PaisesService,
    private routeractivo:ActivatedRoute) { }

  ngOnInit(): void {
    this.routeractivo.params
    .pipe(
      switchMap(({id})=> this._paises.pais(id)),
      tap(console.log)
      )
    .subscribe(
      {
        next:pais=>{this.pais =pais[0];
        }
      }

    )

    // this.routeractivo.params
    // .subscribe({
    //   next:({id})=>{
    //     this._paises.pais(id)
    //     .subscribe({
    //         next:pais=>{
    //           console.log(pais);

    //         }
    //     })
    //     // console.log(id);
    //   }
    // }
    // )
  }

}
