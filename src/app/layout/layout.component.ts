import { Component, OnInit, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../state/reducers';
import * as ApplicationActions from '../state/application/actions';
import { Router } from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  $isLoggedIn: Observable<boolean>;

  @HostBinding('class.application') class = 'application';
  public constructor (private store: Store<fromRoot.State>, public router: Router){
    if(localStorage.getItem('isLoggedin') == 'false') {
      this.router.navigate(['access-denied']);
    }
  }

  ngOnInit(){
    this.$isLoggedIn = this.store.select(fromRoot.selectIsLoggedIn);
  }
/*
  logIn(){
    this.store.dispatch(new ApplicationActions.LogIn());
  }*/

  extendLogout(){
    this.store.dispatch(new ApplicationActions.ExtendLogoutTimer());
  }
  //constructor() {}

  //ngOnInit() {}
}
