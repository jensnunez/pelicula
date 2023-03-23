import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {NgbPaginationModule, NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';

import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { PipesModule } from '../pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';

import { BuscarComponent } from './buscar/buscar.component';
import { PosterComponent } from './poster/poster.component';



@NgModule({
  declarations: [
    NavbarComponent,
  
    PeliculasPosterGridComponent,
 
    BuscarComponent,
       PosterComponent
  ],
  exports: [
    NavbarComponent,
 
    PeliculasPosterGridComponent,
 
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbPaginationModule, 
    NgbRatingModule,
    PipesModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
