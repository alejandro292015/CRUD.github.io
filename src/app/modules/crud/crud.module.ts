import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCrudComponent } from './home-crud/home-crud.component';
import { FormularioAgregarComponent } from './formulario-agregar/formulario-agregar.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormularioEditarComponent } from './formulario-editar/formulario-editar.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



@NgModule({
  declarations: [HomeCrudComponent, FormularioAgregarComponent, FormularioEditarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ]
})
export class CrudModule { }
