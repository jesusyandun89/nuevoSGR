import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { ConsultaUsuarios } from '../model/login/consultaUsuarios';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    KEY = 'session';
    value: any = null;
    consultaUsuarios: ConsultaUsuarios[];
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
            if(this.form.value.usuario == "wamorales") {
                this.getUser();
                return true;
            }
            else return false;
        }
        else return false;
    }

    set(expired: number = 0) {
        localStorage.set(this.KEY, { a: 1, now: +new Date }, expired, 's');
    }

    getUser() {
        this.loginService.getUsers().subscribe((usuarios)=>{
            this.consultaUsuarios = usuarios;
            sessionStorage.setItem(this.KEY, JSON.stringify(this.consultaUsuarios));
        },(error)=>{
            console.log(error);
        });
        
    }

    setSession() {
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem(this.KEY, JSON.stringify(this.consultaUsuarios));
        const myObjStr = JSON.stringify(localStorage.getItem(this.KEY));

        //console.log(myObjStr);
        //console.log(JSON.parse(myObjStr));
    }

    remove() {
        localStorage.remove(this.KEY);
    }
}
