import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { YtblSgrEmpresa } from '../../model/login/ytblSgrEmpresa';
import { Session } from '../../model/login/session';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
  animations: [routerTransition()]
})
export class EmpresasComponent implements OnInit {
  
  sessionAbierta: Session;
  form;
  empresa: any = {};
  empresasObj: YtblSgrEmpresa[] = [];
  valido: boolean;

  constructor(public router: Router) {
    try {
      this.sessionAbierta =  JSON.parse(sessionStorage.getItem("session"));
      this.empresasObj = JSON.parse(sessionStorage.getItem("empresas"));
      if(this.sessionAbierta == null)
        this.router.navigate(['access-denied']);
    } catch (error) {
      alert(error);
      this.router.navigate(['access-denied']);
    }
  }

  ngOnInit() {
      

      this.form = new FormGroup({
        empresa: new FormControl('', Validators.required)
      });
  }

  asignaEmpresa(id: number) {
    this.empresa = {};
    this.empresa = this.empresasObj.find(x => x.idEmp === id);
    this.valido = false;
  }
}
