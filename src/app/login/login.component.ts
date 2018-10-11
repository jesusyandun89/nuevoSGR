import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { ConsultaUsuarios } from '../model/login/consultaUsuarios';
import { Login } from '../model/login/login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    KEY = 'session';
    value: any = null;
    consultaUsuario: ConsultaUsuarios;
    login: any = {};
    loginEnvio: Login;
    form;

    constructor(public router: Router, private loginService: AuthenticationService) {}

    ngOnInit() {
        this.form = new FormGroup({
            usuario: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    onLoggedin() {
        if(this.validaDatos()) {
            this.setSession();
        }
        else {
            alert("Error");
        }
        /*localStorage.setItem('isLoggedin', 'true');
        sessionStorage.setItem('isLoggedin', 'true');*/
    }

    validaDatos(): boolean {
        if(this.form.value != "") {
            this.login.usuario = this.form.value.usuario;
            this.login.password = this.form.value.password;

            this.loginEnvio = this.login;
            
            this.getUser();
            return true;
        }
        else return false;
    }

    set(expired: number = 0) {
        localStorage.set(this.KEY, { a: 1, now: +new Date }, expired, 's');
    }

    getUser() {
        this.loginService.login(this.loginEnvio).subscribe((usuario)=>{
            this.consultaUsuario = usuario;
            console.log(this.consultaUsuario);
            sessionStorage.setItem(this.KEY, JSON.stringify(this.consultaUsuario));
        },(error)=>{
            console.log(error);
        });
    }

    setSession() {
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem(this.KEY, JSON.stringify(this.consultaUsuario));
        const myObjStr = JSON.stringify(localStorage.getItem(this.KEY));

        //console.log(myObjStr);
        //console.log(JSON.parse(myObjStr));
    }

    remove() {
        localStorage.remove(this.KEY);
    }
}
