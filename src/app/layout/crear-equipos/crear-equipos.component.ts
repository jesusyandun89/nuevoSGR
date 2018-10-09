import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CrearEquiposService } from '../../services/crear-equipos.service';
import { EquipoInfo } from '../../model/laboratorio/equipoInfo';
import { ModeloxMarcas } from '../../model/laboratorio/modeloxMarcas';
import { MarcaxEquipos } from '../../model/laboratorio/marcaxEquipos';
import { Tipo } from '../../model/laboratorio/tipo';
import { YtblSgrEmpresa } from '../../model/login/ytblSgrEmpresa';

@Component({
  selector: 'app-crear-equipos',
  templateUrl: './crear-equipos.component.html',
  styleUrls: ['./crear-equipos.component.scss'],
  animations: [routerTransition()]
})
export class CrearEquiposComponent implements OnInit {
  //? Arrays con la información total
  equiposInfo: EquipoInfo[];
  modeloEquipos: ModeloxMarcas[];
  marcaEquipos: MarcaxEquipos[];
  tipoEquipos: Tipo[];
  empresas: YtblSgrEmpresa[];

  //?Variables objeto usadas para la carga en los arrays
  equipo: any = {};
  modelo: any = {};
  marca: any = {};
  tipo: any = {};
  empresa: any = {};

  //?Variables de validación para habilitar y deshabilitar combos
  bodegaValida: boolean = true;
  empresaValida: boolean = true;
  tipoValida: boolean = true;
  marcaValida: boolean = false;
  modeloValida: boolean = false;

  constructor(private creaEquiposService: CrearEquiposService) { }

  form;
  ngOnInit() {
    this.getEmpresas();
  }

  crearEquipo(Equipo) {

  }

  actualizaEquipo(Equipo) {
    
  }

  getInformacion(idEmpresa: number) {
    this.creaEquiposService.getInformacion(idEmpresa).subscribe((equipoInformacion) => {
      this.equiposInfo = equipoInformacion;
      console.log(this.equiposInfo);
    }, (error) => {
      console.log(error);
    });
  }

  getEmpresas() {
    this.empresa = {};
    this.empresas = [];
    this.empresa.id = 1;
    this.empresa.nombreEmpresa = "TVCable";
    this.empresas.push(this.empresa);
    this.empresa = {};
    this.empresa.id = 5;
    this.empresa.nombreEmpresa = "Setel";
    this.empresas.push(this.empresa);
  }

  getTipo(id: number): void {
    this.getInformacion(id);
  }

  getMarca(id: number): void {
    this.marcaEquipos = [];
    for(let i = 0; i < this.equiposInfo.length; i++) {
      for(let j =0; j < this.equiposInfo[i].marcaxEquipos.length; j++) {
        this.marca = {};
        this.marca.idMarca = this.equiposInfo[i].marcaxEquipos[j].idMarca;
        this.marca.nombreMarca = this.equiposInfo[i].marcaxEquipos[j].nombreMarca;
        this.marca.modeloxMarcas = this.equiposInfo[i].marcaxEquipos[j].modeloxMarcas;

        this.marcaEquipos.push(this.marca);
      }
    }
    console.log(this.marcaEquipos);
  }

  getModelo(id: number): void {
    this.modeloEquipos = [];
    for(let i = 0; i < this.marcaEquipos.length; i++) {
      for(let j = 0; j < this.marcaEquipos[i].modeloxMarcas.length; j++) {
        this.modelo = {};
        this.modelo.idModelo = this.marcaEquipos[i].modeloxMarcas[j].idModelo;
        this.modelo.nombreModelo = this.marcaEquipos[i].modeloxMarcas[j].nombreModelo;

        this.modeloEquipos.push(this.modelo);
      }
    }
    console.log(this.modeloEquipos);
  }

}
