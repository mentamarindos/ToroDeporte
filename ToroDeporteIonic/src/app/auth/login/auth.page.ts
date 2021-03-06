import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../../model/empleados.model';
import { SERVER_API_LOCAL } from '../../../assets/constantes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private empleado: Empleado;
  private token: string;

  constructor(private http: HttpClient) { }

  login(empleado: Empleado): Observable<any> {
    let url = SERVER_API_LOCAL+'/oauth/token';
    let credenciales = btoa('torodeporte' + ':' + 'sevilla');
    const httpHeaders = new HttpHeaders()
      .set('content-type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic ' + credenciales);

    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', empleado.usernameEmpleados);
    params.set('password', empleado.contrasenaEmpleados);
    console.log(httpHeaders);
    return this.http.post<any>(url, params.toString(), { headers: httpHeaders })
  }

  logout() {
    this.token = null;
    this.empleado = null;
    sessionStorage.clear();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('empleado');
  }
  guardarEmpleado(token: string) {
    let payload = this.getDataToken(token);
    console.log(payload);
    this.empleado = new Empleado();
    this.empleado.nombreEmpleados = payload.user_name;
    this.empleado.roles = payload.authorities;
    //GUARDA EN SESION LOS ROLES Y EL NOMBRE DE USUARIO
    sessionStorage.setItem('empleado', JSON.stringify(this.empleado));
    //JSON.parse(sessionStorage.getItem('empleado') para sacar los datos
  }

  guardarToken(token: string) {
    this.token = token
    sessionStorage.setItem('token', token);
  }
  getDataToken(token: string) {
    if (token) {
      return JSON.parse(atob(token.split(".")[1]));
    } else return null;
  }
  getIdEmpleado() {
    let payload = this.getDataToken(this.dataToken);
    return payload.idEmpleado;
  }
  public get dataToken(): string {
    if (this.token) {
      return this.token;
    } else if (!this.token && sessionStorage.getItem('token')) {
      this.token = sessionStorage.getItem('token');
      return this.token;
    } else {
      return null;
    }
  }

  public isAuthenticated() {
    let payload = this.getDataToken(this.dataToken);
    if (payload && payload.user_name && payload.user_name.length > 0) {
      return true;
    } else return false;
  }
}