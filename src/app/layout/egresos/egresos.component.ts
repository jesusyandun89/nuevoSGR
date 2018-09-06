import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.scss'],
  animations: [routerTransition()]
})
export class EgresosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
