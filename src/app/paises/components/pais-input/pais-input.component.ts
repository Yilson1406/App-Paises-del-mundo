import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
@Output()onEnter    :EventEmitter<string>=new EventEmitter();
@Output()onDebounce :EventEmitter<string>=new EventEmitter();
@Input()play:string='';
debouncer:Subject<string> = new Subject();
  termino:string =''
  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe({
      next:data =>{this.onDebounce.emit(data)}
    })
  }
  tecla(){
    this.debouncer.next(this.termino)
   }
buscar(){
this.onEnter.emit(this.termino);
}
}
