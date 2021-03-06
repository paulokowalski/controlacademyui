import { MessageService } from 'primeng/components/common/messageservice';
import { JwtHelper } from 'angular2-jwt';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;

  constructor(private http: Http,
              private jwtHelper: JwtHelper
  ) {
    this.carregarToken();
  }

  login(usuario: string, senha: string): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEBy');
    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers, withCredentials: true })
              .toPromise()
              .then(response => {
                this.armazenarToken(response.json().access_token);
              })
              .catch(response => {
                if (response.status === 400) {
                   const responseJson = response.json();
                   if (responseJson.error = 'invalid_grant') {
                     return Promise.reject('Usuário ou senha inválida');
                   }
                }
                return Promise.reject(response);
              });
  }

  obterNovoAccessToken(): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEBy');

    const body = 'grant_type=refresh_token';
    return this.http.post (this.oauthTokenUrl, body, { headers, withCredentials: true })
                    .toPromise()
                    .then(response => {
                      this.armazenarToken(response.json().access_token);
                      return Promise.resolve(null);
                    })
                    .catch(response => {
                      return Promise.resolve(null);
                    });
  }

  temPermissao(permissao: string) {
    if (this.jwtPayload.authorities === undefined) {
      return false;
    }
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem('token');
    return !token || this.jwtHelper.isTokenExpired(token);
  }

  limparAccessToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private carregarToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.armazenarToken(token);
    }
  }
}
