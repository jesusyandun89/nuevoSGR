import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CrearEquiposService } from '../../services/crear-equipos.service';
import { EquipoInfo } from '../../model/laboratorio/equipoInfo';

@Component({
  selector: 'app-crearEquipos',
  templateUrl: './crearEquipos.component.html',
  styleUrls: ['./crearEquipos.component.scss'],
  animations: [routerTransition()]
})
export class crearEquiposComponent implements OnInit {

  equiposInfo: EquipoInfo[];
  constructor(private creaEquiposService: CrearEquiposService) { }

  form;

  ngOnInit() {
    this.obtenerInformacion();
  }

  crearEquipo(Equipo) {

  }

  actualizaEquipo(Equipo) {
    
  }

  obtenerInformacion() {
    this.creaEquiposService.getInformacion(5).subscribe((equipoInformacion) => {
      this.equiposInfo = equipoInformacion;
    }, (error) => {
      console.log(error);
    });
  }

}
