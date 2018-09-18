import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-auditoria-equipos',
  templateUrl: './auditoria-equipos.component.html',
  styleUrls: ['./auditoria-equipos.component.scss'],
  animations: [routerTransition()]
})
export class AuditoriaEquiposComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
