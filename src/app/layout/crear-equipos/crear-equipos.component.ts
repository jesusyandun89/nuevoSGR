import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CrearEquiposService } from '../../services/crear-equipos.service';
import { EquipoInfo } from '../../model/laboratorio/equipoInfo';
import { ModeloxMarcas } from '../../model/laboratorio/modeloxMarcas';
import { MarcaxEquipos } from '../../model/laboratorio/marcaxEquipos';
import { Tipo } from '../../model/laboratorio/tipo';
import { YtblSgrEmpresa } from '../../model/login/ytblSgrEmpresa';
import { YtblSgrAlmacenes } from '../../model/login/ytblSgrAlmacenes';
import * as XLSX from 'xlsx';
import { Serie } from '../../model/laboratorio/serie';
import { Identificador } from '../../model/laboratorio/identificador';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { EquiposCreacion } from '../../model/laboratorio/equiposCreacion';
import { EquiposxEmpresa } from '../../model/laboratorio/equiposxEmpresa ';
type AOA = any [][];

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
  series: Serie[];
  identificadores: Identificador[];
  valorSerie: string;
  //?Variables objeto usadas para la carga en los arrays
  equipo: any = {};
  modelo: any = {};
  marca: any = {};
  tipo: any = {};
  serie: any = {};
  tipoTarea: any = {};
  equipoxEmpresa: any = {};

  //?Variables funcionales
  mostratInput: boolean = true;
  nombreArchivo: string;
  cargaArchivo: boolean = true;
  msg: string;

  //?Variables de validación para habilitar y deshabilitar combos
  bodegaValida: boolean = true;
  empresaValida: boolean = true;
  tipoValida: boolean = true;
  marcaValida: boolean = false;
  modeloValida: boolean = false;
  valido: boolean = false;

  consultaEmpresasObj: YtblSgrEmpresa[];
  consultaAlmacenes: any = {};
  consultaAlmacenesObj: YtblSgrAlmacenes[];

  //?Variables usadas para subir los identificadores de los equipos.
  data: AOA = [ [], [] ];
	wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';
  identificador: any = {};
  equipoCreacion: any = {};

  //?Variables objeto
  equipoCreacionObj: EquiposCreacion;
  almacenObj: YtblSgrAlmacenes;
  empresaObj: YtblSgrEmpresa;
  tipoObj: EquiposxEmpresa;
  marcaObj: MarcaxEquipos;
  modeloObj: ModeloxMarcas;
  

  constructor(private creaEquiposService: CrearEquiposService) {}

  form;
  ngOnInit() {
    this.getEmpresas();
    this.getAlmacenes();

    this.form = new FormGroup({
      almacen: new FormControl('', Validators.required),
      empresa: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      marca: new FormControl('', Validators.required),
      modelo: new FormControl('', Validators.required)
    })
  }

  onFileChange(evt: any) {
    this.series = [];
		/* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    this.nombreArchivo = target.files[0].name;

    if (target.files[0].name.indexOf("xls") != -1 ) {
      if (target.files.length !== 1) throw new Error('No puede cargar mas de un archivo');
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        /* read workbook */
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
  
        /* grab first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
  
        /* save data */
        this.data = <AOA>(XLSX.utils.sheet_to_json(ws, {header: 1}));
        
        for(let i = 1; i< this.data.length; i++){
          this.serie = {};
          this.identificadores = [];
          this.serie.valor = "";
          this.serie.valor = this.data[i][0];
          this.identificador = {};
          this.identificador.nombreIdentificador = this.data[i][1];
          this.identificadores.push(this.identificador);
          this.identificador = {};
          this.identificador.nombreIdentificador = this.data[i][2];
          this.identificadores.push(this.identificador);
  
          this.serie.identificadores = this.identificadores;
          this.serie.id = i;

          console.log(this.serie);
          
          this.series.push(this.serie);
  
        }
        this.cargaArchivo = false;
      };
      reader.readAsBinaryString(target.files[0]);
    } else {
      alert("El archivo a cargar es incorrecto");
      throw new Error('El archivo a cargar es incorrecto');
    }
  }

  borraCarga() {
    this.mostratInput = true;
    this.cargaArchivo = true;
    this.nombreArchivo = "";
    this.series = [];
  }

  asignaAlmacen(id: number) {
    this.almacenObj = this.consultaAlmacenes.find(x => x.idAlma == id);
  }

  asignaTipo(id: number) {
    this.tipoObj = this.equiposInfo.find(x => x.idEquipo === id);
  }

  aceptarValores() {
    this.mostratInput = false;
    this.cargaArchivo = true;
  }
  
  guardaEquipos() {
    this.tipoTarea = {};
    this.tipoTarea.nameTarea = "Creación de equipos";
    this.tipoTarea.id = null;
    this.tipoTarea.idUser = Number.parseInt(sessionStorage.getItem("usuario"));

    this.marcaObj.modeloxMarcas = [];
    this.marcaObj.modeloxMarcas.push(this.modeloObj);

    this.equipoxEmpresa = {};
    this.equipoxEmpresa.idEquipo = this.tipoObj.idEquipo;
    this.equipoxEmpresa.nombreEquipo = this.tipoObj.nombreEquipo;
    this.equipoxEmpresa.marcaxEquipos = [];
    this.equipoxEmpresa.marcaxEquipos.push(this.marcaObj);
    this.almacenObj.ytblSgrEmpresa = [];
    this.almacenObj.ytblSgrEmpresa.push(this.empresaObj);

    this.equipoCreacion = {};
    this.equipoCreacion.tipoTarea = this.tipoTarea;
    this.equipoCreacion.ytblSgrAlmacene = this.almacenObj;
    this.equipoCreacion.equiposxEmpresa = this.equipoxEmpresa;

    //this.equipoCreacion.series = [];
    this.equipoCreacion.series = this.series;

    this.creaEquiposService.creacionEquipos(this.equipoCreacion)
    .subscribe(res => {
      if(res == null) {
        this.msg = "Equipos creados con exito";
        this.limpiar();
      }else {
        this.msg = "Error al crear los equipos";
      }
    })

  }

  limpiar() {
    this.borraCarga();
    this.equiposInfo = [];
    this.marcaEquipos = [];
    this.modeloEquipos = [];
  }

  closeAlert(event):void {
    event.preventDefault();
    this.msg = '';
  }

  getInformacion(idEmpresa: number) {
    this.creaEquiposService.getInformacion(idEmpresa).subscribe((equipoInformacion) => {
      this.equiposInfo = equipoInformacion;
    }, (error) => {
      console.log(error);
    });
  }

  getEmpresas() {
    this.consultaEmpresasObj =  JSON.parse(sessionStorage.getItem("empresas"));
  }

  getAlmacenes() {
    this.consultaAlmacenes =  JSON.parse(sessionStorage.getItem("almacenes"));
    this.consultaAlmacenesObj = [];
    this.consultaAlmacenesObj = this.consultaAlmacenes;
    this.consultaAlmacenes = [];

    for(let i = 0; i < this.consultaAlmacenesObj.length; i++) {
      if(this.consultaAlmacenesObj[i].idHiperk.substring(1, 2) == "C") {
        this.consultaAlmacenes.push(this.consultaAlmacenesObj[i]);
      }
    }
    
    this.consultaAlmacenes.ytblSgrEmpresa = this.consultaEmpresasObj;
  }

  getTipo(id: number): void {
    this.empresaObj = this.consultaEmpresasObj.find(x => x.idEmp == id);
    this.getInformacion(id);
  }

  getMarca(id: number): void {
    this.marcaEquipos = [];
    for(let i = 0; i < this.equiposInfo.length; i++) {
      for(let j =0; j < this.equiposInfo[i].marcaxEquipos.length; j++) {
        if(this.equiposInfo[i].idEquipo == id) {
          this.marcaEquipos.push(this.equiposInfo[i].marcaxEquipos[j]);
        }
      }
    }
    this.tipoObj = this.equiposInfo.find(x => x.idEquipo == id);
  }

  getModelo(id: number): void {
    this.modeloEquipos = [];
    for(let i = 0; i < this.marcaEquipos.length; i++) {
      for(let j = 0; j < this.marcaEquipos[i].modeloxMarcas.length; j++) {
        if(this.marcaEquipos[i].idMarca == id) {
          this.modeloEquipos.push(this.marcaEquipos[i].modeloxMarcas[j]);
        }        
      }
    }
    this.marcaObj = this.marcaEquipos.find(x => x.idMarca == id);
  }

  asignamodelo(id: number): void {
    this.modeloObj = this.modeloEquipos.find(x => x.idModelo == id);
  }

}
