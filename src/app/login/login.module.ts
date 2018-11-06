import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule   } from '@angular/forms';
import { reducers } from '../state/reducers';

@NgModule({
    imports: [CommonModule, 
        LoginRoutingModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers),
        FormsModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}
