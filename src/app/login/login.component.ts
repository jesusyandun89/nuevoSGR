import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Login } from '../model/login/login';
import { Session } from '../model/login/session';
import { Observable } from 'rxjs';

import * as fromRoot from '../state/reducers';
import * as ApplicationActions from '../state/application/actions';
import { Store } from '@ngrx/store';
import { ConsultaUsuarios } from '../model/login/consultaUsuarios';
import { YtblSgrAlmacenes } from '../model/login/ytblSgrAlmacenes';
import { YtblSgrEmpresa } from '../model/login/ytblSgrEmpresa';
import { YtblSgrRol } from '../model/login/ytblSgrRol';
import { YtblSgrProfile } from '../model/login/ytblSgrProfile';
import { YtblSgrModule } from '../model/login/ytblSgrModule';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    KEY = 'session';
    value: any = null;
    session: Session;
    login: any = {};
    loginEnvio: Login;
    msg: string;
    form;

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
    usuario: number;
    usuarioLogIn: string;

    constructor(public router: Router, private loginService: AuthenticationService, private store: Store<fromRoot.State>) {}
    $isLoggedIn: Observable<boolean>;

    @HostBinding('class.application') class = 'application';

    ngOnInit() {
        this.form = new FormGroup({
            usuario: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });

        this.$isLoggedIn = this.store.select(fromRoot.selectIsLoggedIn);
    }

    onLoggedin() {
        if(this.validaDatos()) {
            this.getUser();
        }
        else {
            alert("Error");
        }
        /*localStorage.setItem('isLoggedin', 'true');
        sessionStorage.setItem('isLoggedin', 'true');*/
    }

    validaDatos(): boolean {
        if(this.form.value != "") {
            this.login.user = this.form.value.usuario;
            this.login.pwd = this.form.value.password;
            this.loginEnvio = this.login;
            return true;
        }
        else return false;
    }

    set(expired: number = 0) {
        localStorage.set(this.KEY, { a: 1, now: +new Date }, expired, 's');
    }

    getUser() {
        this.loginService.login(this.loginEnvio).subscribe((usuario)=>{
            this.session = usuario;
            if(this.session.userLogin == "TRUE" && this.session.ytblSgrUser.length > 0) {
                sessionStorage.setItem(this.KEY, JSON.stringify(this.session));
                this.setSession();
                this.store.dispatch(new ApplicationActions.LogIn());
                this.router.navigate(['empresas']);
            } else {
                if(this.msg == null) {
                    this.msg = "Usuario no tiene asignado modulos"
                } else {
                    this.msg = this.session.msg;
                }
            }
            
        },(error)=>{
            console.log(error);
        });
    }

    setSession() {
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem(this.KEY, JSON.stringify(this.session));

        this.sessionAbierta =  JSON.parse(sessionStorage.getItem("session"));
        this.usuario = this.sessionAbierta.ytblSgrUser[0].idUser;
        this.usuarioLogIn = this.sessionAbierta.ytblSgrUser[0].userSgr;
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
        sessionStorage.setItem("usuario", JSON.stringify(this.usuario));
        sessionStorage.setItem("usuarioLogIn", JSON.stringify(this.usuarioLogIn));
    }

    remove() {
        localStorage.remove(this.KEY);
    }

    closeAlert(event):void {
        event.preventDefault();
        this.msg = '';
    }
}
