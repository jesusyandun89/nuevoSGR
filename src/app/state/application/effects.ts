import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switch';
import 'rxjs/add/observable/timer';

import { Observable } from 'rxjs/Rx';

import * as ApplicationActions from './actions';
import { Router } from '@angular/router';

@Injectable()
export class ApplicationEffects {

    APPLICATION_TIMEOUT_TIME = 60000 * 10;

    @Effect()
    extendApplicationTimeout$ = this.actions$
        .switchMap( ( action: Action ) => {
            return Observable.timer(this.APPLICATION_TIMEOUT_TIME) 
        })
        .map(() => {
            localStorage.setItem('isLoggedin', 'false');
            localStorage.setItem('session', "");
            sessionStorage.setItem('session', "");
            this.router.navigate(['login']);
            return new ApplicationActions.LogOut()
        });

    constructor( private actions$: Actions, public router: Router ) {}
}