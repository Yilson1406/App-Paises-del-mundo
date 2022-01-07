import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { PaisComponent } from './pages/pais/pais.component';
import { RegionComponent } from './pages/region/region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { PisTableComponent } from './components/pis-table/pis-table.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CapitalComponent,
    PaisComponent,
    RegionComponent,
    VerPaisComponent,
    PisTableComponent,
    PaisInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    CapitalComponent,
    PaisComponent,
    RegionComponent,
    VerPaisComponent
  ]
})
export class PaisesModule { }
