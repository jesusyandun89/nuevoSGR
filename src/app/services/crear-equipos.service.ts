import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { EquipoInfo } from '../model/laboratorio/equipoInfo';
import { MessageService } from './message.service';
import { EquiposCreacion } from '../model/laboratorio/equiposCreacion';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CrearEquiposService {

  //private domain: string = "http://192.168.21.152:8088/sgr/sgr2/";
  private domain: string = "/sgr2/"

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getInformacion(idEmpresa: number): Observable<EquipoInfo[]> {
    const url = `${this.domain}EquiposxEmpresa?empresa=${idEmpresa}`;
    return this.http.get<EquipoInfo[]>(url)
      .pipe(
        tap(detailrubros => this.log('fetched EquiposxEmpresa')),
        catchError(this.handleError('getEquiposxEmpresa', []))
      );
  }

  creacionEquipos(equiposCreacion: EquiposCreacion): Observable<EquiposCreacion> {
    const url = `${this.domain}/EquiposCreacion/`;
    return this.http.post<EquiposCreacion>(url, equiposCreacion, httpOptions).pipe(
      tap((calculateValue: EquiposCreacion) => this.log(`added CalculateValue w/ ${equiposCreacion}`)),
      catchError(this.handleError<EquiposCreacion>('addEquipos'))
    );
  }

  errorHandler(error: Response) {
    return Observable.throw(error || ' SERVER ERROR');
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`EquiposxEmpresa: ${message}`);
  }

  
}
