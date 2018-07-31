import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-crearEquipos',
  templateUrl: './crearEquipos.component.html',
  styleUrls: ['./crearEquipos.component.scss'],
  animations: [routerTransition()]
})
export class crearEquiposComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
