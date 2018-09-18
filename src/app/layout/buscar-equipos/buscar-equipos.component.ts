import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-buscar-equipos',
  templateUrl: './buscar-equipos.component.html',
  styleUrls: ['./buscar-equipos.component.scss'],
  animations: [routerTransition()]
})
export class BuscarEquiposComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
