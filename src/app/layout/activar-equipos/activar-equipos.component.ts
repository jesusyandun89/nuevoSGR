import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import * as XLSX from 'xlsx';
import { Session } from '../../model/login/session';
import { Router } from '@angular/router';
import { YtblSgrAlmacenes } from '../../model/login/ytblSgrAlmacenes';
import { YtblSgrEmpresa } from '../../model/login/ytblSgrEmpresa';
import { FormGroup, FormControl, Validators } from '@angular/forms';
type AOA = any [][];

@Component({
  selector: 'app-activar-equipos',
  templateUrl: './activar-equipos.component.html',
  styleUrls: ['./activar-equipos.component.scss'],
  animations: [routerTransition()]
})
export class ActivarEquiposComponent implements OnInit {

  //?Variables de validación para habilitar y deshabilitar combos
  bodegaValida: boolean = true;
  empresaValida: boolean = true;
  tipoValida: boolean = true;
  marcaValida: boolean = false;
  modeloValida: boolean = false;
  valido: boolean = false;
  p;

  //?Variables funcionales
  mostratInput: boolean = true;
  nombreArchivo: string;
  cargaArchivo: boolean = true;
  msg: string;
  serie: any;
  series: any [];

  //?Variables usadas para subir los identificadores de los equipos.
  data: AOA = [ [] ];
	wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'EquiposActivar.xlsx';
  dataDownload: AOA = [ [] ];

  //?Variables objeto
  sessionAbierta: Session;
  consultaAlmacenes: any = {};
  consultaAlmacenesObj: YtblSgrAlmacenes[];
  consultaEmpresasObj: YtblSgrEmpresa[];
  almacenObj: YtblSgrAlmacenes;

  constructor(public router: Router) {
    /*try {
      this.sessionAbierta =  JSON.parse(sessionStorage.getItem("session"));
      if(this.sessionAbierta == null)
        console.log(this.sessionAbierta);
        this.router.navigate(['access-denied']);

    } catch (error) {
      alert(error);
      this.router.navigate(['access-denied']);
    }*/
  }

  form;

  ngOnInit() {
    this.getEmpresas();
    this.getAlmacenes();

    this.form = new FormGroup({
      almacen: new FormControl('', Validators.required),
      accion: new FormControl('', Validators.required),
      servicio: new FormControl('', Validators.required)
    })
  }

  export(): void {
    this.data = [];
    this.data.push(this.formatoCarga());
      console.log(this.data);
		/* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);
    console.log(ws);

		/* generate workbook and add the worksheet */
		const wb: XLSX.WorkBook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'formatoCreacionEquipos');

		/* save to file */
		XLSX.writeFile(wb, this.fileName);
  }

  formatoCarga(): AOA {
    this.series = [];

    this.serie = "Serie de equipos";
    this.dataDownload = this.series;
    this.series.push(this.serie);

    return this.series;
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
          this.series = [];
          this.serie = "";
          this.serie = this.data[i][0];
          this.series.push(this.serie);  
        }

        console.log(this.data);
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

  aceptarValores() {
    this.mostratInput = false;
    this.cargaArchivo = true;
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

  getEmpresas() {
    this.consultaEmpresasObj =  JSON.parse(sessionStorage.getItem("empresas"));
  }

  closeAlert(event):void {
    event.preventDefault();
    this.msg = '';
  }
}
