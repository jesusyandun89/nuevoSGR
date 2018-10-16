import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Login } from '../model/login/login';
import { Session } from '../model/login/session';

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

    constructor(public router: Router, private loginService: AuthenticationService) {}

    ngOnInit() {
        this.form = new FormGroup({
            usuario: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
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
            if(this.session.userLogin == "TRUE") {
                this.router.navigate(['empresas']);
                sessionStorage.setItem(this.KEY, JSON.stringify(this.session));
                this.setSession();
            } else {
                this.msg = this.session.msg;
            }
            
        },(error)=>{
            console.log(error);
        });
    }

    setSession() {
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem(this.KEY, JSON.stringify(this.session));
    }

    remove() {
        localStorage.remove(this.KEY);
    }
}
