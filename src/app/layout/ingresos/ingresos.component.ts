import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss'],
  animations: [routerTransition()]
})
export class IngresosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
