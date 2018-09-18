import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-cambiar-modelo',
  templateUrl: './cambiar-modelo.component.html',
  styleUrls: ['./cambiar-modelo.component.scss'],
  animations: [routerTransition()]
})
export class CambiarModeloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
