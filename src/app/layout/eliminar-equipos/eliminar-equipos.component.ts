import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-eliminar-equipos',
  templateUrl: './eliminar-equipos.component.html',
  styleUrls: ['./eliminar-equipos.component.scss'],
  animations: [routerTransition()]
})
export class EliminarEquiposComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
