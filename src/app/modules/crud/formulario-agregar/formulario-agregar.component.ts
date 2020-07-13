import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Empleados } from '../../../../models/datos';
import { ThrowStmt } from '@angular/compiler';
import { HerokuService } from '../../../services/heroku.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-agregar',
  templateUrl: './formulario-agregar.component.html',
  styleUrls: ['./formulario-agregar.component.css']
})
export class FormularioAgregarComponent implements OnInit {

  empleados: Empleados
  public frmAgregarEmpleado: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private servie: HerokuService,
    private router: Router,



  ) {
    this.empleados = new Empleados()
    this.validacionesCampos()

  }
  
  ngOnInit() {
  }

  cancelar(){
    this.router.navigate(['/home']);

  }
 

   agregarEmpleado(){
     debugger
     this.servie.agregarEmpleado(this.empleados).subscribe((res:any)=>{
      if (res !== null || res !== {}) {


        this.router.navigate(['/home']);
      }
     }

     )
   }
  validacionesCampos() {
    debugger
    this.frmAgregarEmpleado = this.formBuilder.group({
      nombre: this.formBuilder.control('', [Validators.required,Validators.maxLength(50)]),
      apellido: this.formBuilder.control('', [Validators.required,Validators.maxLength(50)]),
      id: this.formBuilder.control('', [Validators.required,Validators.maxLength(50)]),
      correo: this.formBuilder.control('', [Validators.required,Validators.maxLength(50)])
     
    });
  }


}
