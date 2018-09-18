import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-activar-equipos',
  templateUrl: './activar-equipos.component.html',
  styleUrls: ['./activar-equipos.component.scss'],
  animations: [routerTransition()]
})
export class ActivarEquiposComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
