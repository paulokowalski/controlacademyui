import { AuthService } from './auth.service';
import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: AuthHttp,
              private auth: AuthService) { }

  tokenRevokeUrl = 'http://localhost:8080/tokens/revoke';

  logout() {
    return this.http.delete(this.tokenRevokeUrl, {withCredentials: true})
               .toPromise()
               .then(() => {
                 this.auth.limparAccessToken();
               });
  }
}
