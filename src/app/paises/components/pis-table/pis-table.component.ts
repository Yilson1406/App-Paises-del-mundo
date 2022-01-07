import { Component, Input, OnInit } from '@angular/core';
import { Paises } from '../../interfaces/paies.interface';

@Component({
  selector: 'app-pis-table',
  templateUrl: './pis-table.component.html',
  styleUrls: ['./pis-table.component.css']
})
export class PisTableComponent implements OnInit {

  constructor() { }
 @Input() paises:Paises[]=[]
  ngOnInit(): void {
  }



}
