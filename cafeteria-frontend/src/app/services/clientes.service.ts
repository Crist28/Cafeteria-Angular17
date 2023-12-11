import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './../environment/global.component';

interface DatosCliente {
  email: string;
  password: string;
}

interface NuevoCliente {
  nombre: string;
  apellidos: string;
  email: string;
  password: string;
  telefonos?: string;
  tipo?: string;
  dni?: string;
}

@Injectable({ providedIn: 'root' })
export class ClientesService {
  public url;

  constructor(private http: HttpClient) {
    this.url = Global.url;
  }

  login_cliente(data: DatosCliente): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.url + 'login_cliente', data, { headers });
  }

  registro_cliente(data: NuevoCliente): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.url}registro_cliente`, data, { headers });
  }
  

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getCliente(): string | null {
    return localStorage.getItem('cliente');
  }
  setCliente(cliente: string): void {
    localStorage.setItem('cliente', cliente);
  }
}
