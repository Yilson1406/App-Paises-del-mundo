import { Component, OnInit } from '@angular/core';
import { Paises } from '../../interfaces/paies.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
  ]
})
export class RegionComponent implements OnInit {
regionactiva:string='';
regiones:string[]=['africa', 'americas', 'asia', 'europe', 'oceania']
paises:Paises[]=[]
constructor(private _paises:PaisesService) { }

  ngOnInit(): void {
  }
  activaregoin(region:string){
    if (region === this.regionactiva) {return;}
    this.paises =[]
    this.regionactiva = region
    this._paises.region(this.regionactiva)
    .subscribe({
      next:region=>{
        this.paises = region

      }
    })
  }

}
