import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ConsultaUsuarios } from '../../model/login/consultaUsuarios';
import { YtblSgrAlmacenes } from '../../model/login/ytblSgrAlmacenes';
import { YtblSgrEmpresa } from '../../model/login/ytblSgrEmpresa';
import { YtblSgrProfile } from '../../model/login/ytblSgrProfile';
import { YtblSgrModule } from '../../model/login/ytblSgrModule';
import { YtblSgrRol } from '../../model/login/ytblSgrRol';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Session } from '../../model/login/session';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
  animations: [routerTransition()]
})
export class EmpresasComponent implements OnInit {
  sessionAbierta: Session;
  consultaUsuariosObj: ConsultaUsuarios[];
  almacenes: any = {};
  almacenesObj: YtblSgrAlmacenes[];
  empresa: any = {};
  empresasObj: YtblSgrEmpresa[] = [];
  roles: any = {};
  rolesObj: YtblSgrRol[];
  perfiles: any = {};
  perfilesObj: YtblSgrProfile[];
  modulos: any = {};
  modulosObj: YtblSgrModule[];
  form;
  valido: boolean = true;

  constructor() {
    this.sessionAbierta =  JSON.parse(sessionStorage.getItem("session"));
    this.consultaUsuariosObj = this.sessionAbierta.ytblSgrUser;
    
    for(let i = 0; i < this.consultaUsuariosObj.length; i++ ) {
      this.almacenes = this.consultaUsuariosObj[i].ytblSgrAlmacenes;
      this.roles = this.consultaUsuariosObj[i].ytblSgrRol;
      this.almacenesObj = this.almacenes;
      this.rolesObj = this.roles;
    }
    for(let i = 0; i < this.almacenesObj.length; i++) {
      for(let j = 0; j < this.almacenesObj[i].ytblSgrEmpresa.length; j++) {
        this.empresa = this.empresasObj.find(x => x.idEmp === this.almacenesObj[i].ytblSgrEmpresa[j].idEmp);
        if(this.empresa === undefined) {
          this.empresa = {};
          this.empresa = this.almacenesObj[i].ytblSgrEmpresa[j];
          this.empresasObj.push(this.empresa);
        }
      }
    }
    for(let i = 0; i < this.rolesObj.length; i++ ) {
      this.perfiles = this.rolesObj[i].ytblSgrProfile;
      this.perfilesObj = this.perfiles;
    }
    for(let i = 0; i < this.perfilesObj.length; i++ ) {
      this.modulos = this.perfilesObj[i].ytblSgrModule;
      this.modulosObj = this.modulos;
    }
    sessionStorage.setItem("almacenes", JSON.stringify(this.almacenesObj));
    sessionStorage.setItem("empresas", JSON.stringify(this.empresasObj));
    sessionStorage.setItem("roles", JSON.stringify( this.rolesObj));
    sessionStorage.setItem("perfiles", JSON.stringify(this.perfilesObj));
    sessionStorage.setItem("modulos", JSON.stringify(this.modulosObj));

    this.form = new FormGroup({
      empresa: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  asignaEmpresa(id: number) {
    this.empresa = {};
    this.empresa = this.empresasObj.find(x => x.idEmp === id);
    this.valido = false;
  }
}
