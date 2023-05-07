import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IUsuario2Send } from 'src/app/interfaces/usuario-interfaces';
import { UsuariosService } from 'src/app/servicio/usuarios.service';

@Component({
  selector: 'app-new-usuario',
  templateUrl: './new-usuario.component.html',
  styleUrls: ['./new-usuario.component.css']
})
export class NewUsuarioComponent implements OnInit {
  oForm: FormGroup = null;
  usuario: IUsuario2Send = null;
  strEntity: string = "usuario";
  


  get f() {
    return this.oForm.controls;
  }
  constructor(
    private oRouter: Router,
    private oFormBuilder: FormBuilder,
    private oUsuarioService: UsuariosService,
  ) { }

  ngOnInit(): void {
    this.oForm = this.oFormBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.minLength(5)]],

    });

  }

  onSubmit(){
    if (this.oForm) {
      this.usuario = {
        nombre: this.oForm.value.nombre,
        contraseña: this.oForm.value.password,
        email: this.oForm.value.email,
      };
      this.new();
    }

  }
  new() { 
    this.oUsuarioService
    .newOne(this.usuario)
    .subscribe((id: number) => {});
    
    this.oRouter.navigate([this.strEntity + '/plist']);
  }


}
