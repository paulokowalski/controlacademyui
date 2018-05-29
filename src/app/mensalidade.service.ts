import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MensalidadeService {

  consultaUrl = 'http://localhost:8080/mensalidades';

  constructor(private http: AuthHttp) { }

  consultar(): Promise<any> {
     return this.http.get(`${this.consultaUrl}`)
    .toPromise()
    .then(response => response.json());
  }
}
