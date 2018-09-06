import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
  animations: [routerTransition()]
})
export class EmpresasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
