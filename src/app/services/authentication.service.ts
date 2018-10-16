import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { ConsultaUsuarios } from '../model/login/consultaUsuarios';
import { tap, catchError } from 'rxjs/operators';
import { Login } from '../model/login/login';
import { Session } from '../model/login/session';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private domain: string = "/sgr2/";

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getUsers(): Observable<ConsultaUsuarios[]> {
    const url = `${this.domain}ConsultaUsuarios`;
    return this.http.get<ConsultaUsuarios[]>(url)
      .pipe(
        tap(consultaRubros => this.log('fetched ConsultaUsuarios')),
        catchError(this.handleError('getConsultaUsuarios', []))
      );
  }

  login(login: Login): Observable<Session> {
    const url = `${this.domain}login/`;
    return this.http.post<Session>(url, login, httpOptions).pipe(
      tap((consultausuario: Session) => this.log(`Login w/ id=${consultausuario.mail}`)),
      catchError(this.handleError<Session>('Login'))
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
    this.messageService.add(`ConsultaUsuarios: ${message}`);
  }
}
