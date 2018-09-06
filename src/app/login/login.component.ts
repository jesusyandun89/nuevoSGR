import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    form;

    constructor(public router: Router) {}

    ngOnInit() {
        this.form = new FormGroup({
            usuario: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        })
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

    validaDatos() {
        
    }
}
