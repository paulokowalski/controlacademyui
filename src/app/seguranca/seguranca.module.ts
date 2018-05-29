import { FormsModule } from '@angular/forms';
import { FormLoginComponent } from './form-login/form-login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { RequestOptions, Http } from '@angular/http';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    FormsModule
  ],
  declarations: [
    FormLoginComponent
  ],
  exports: [
    FormLoginComponent
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class SegurancaModule { }
