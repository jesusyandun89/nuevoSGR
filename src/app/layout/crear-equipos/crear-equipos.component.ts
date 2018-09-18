import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-crear-equipos',
  templateUrl: './crear-equipos.component.html',
  styleUrls: ['./crear-equipos.component.scss'],
  animations: [routerTransition()]
})
export class CrearEquiposComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
