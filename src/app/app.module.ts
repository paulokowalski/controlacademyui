import { GrowlModule } from 'primeng/growl';
import { FormLoginComponent } from './seguranca/form-login/form-login.component';
import { SegurancaModule } from './seguranca/seguranca.module';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MensalidadePesquisaComponent } from './mensalidades/mensalidade-pesquisa/mensalidade-pesquisa.component';
import { PessoaCadastroComponent } from './pessoas/pessoa-cadastro/pessoa-cadastro.component';
import { PessoaPesquisaComponent } from './pessoas/pessoa-pesquisa/pessoa-pesquisa.component';

import { PessoaService } from './pessoa-service';
import { CoreModule } from './core/core.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { MensalidadesModule } from './mensalidades/mensalidades.module';
import { browser } from 'protractor';

import { AppComponent } from './app.component';
import { MessageService } from 'primeng/components/common/messageservice';

const routes: Routes = [
  {path: 'login', component: FormLoginComponent},
  {path: 'pessoas', component: PessoaPesquisaComponent},
  {path: 'mensalidades', component: MensalidadePesquisaComponent},
  {path: 'pessoas/novo', component: PessoaCadastroComponent},
  {path: 'pessoas/:codigo', component: PessoaCadastroComponent},
  {path: 'pessoas/:codigo/remove', component: PessoaCadastroComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MensalidadesModule,
    PessoasModule,
    CoreModule,
    SegurancaModule,
    HttpModule,
    RouterModule.forRoot(routes),
    GrowlModule
  ],
  providers: [PessoaService, MessageService,
  { provide: LOCALE_ID, useValue: 'pr-Br'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
