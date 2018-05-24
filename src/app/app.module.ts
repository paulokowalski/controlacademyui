import { browser } from 'protractor';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DataTableModule } from 'primeng/datatable';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';

import { AppComponent } from './app.component';
import { MensalidadePesquisaComponent } from './mensalidade-pesquisa/mensalidade-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mensalidades', component: MensalidadePesquisaComponent},
  {path: 'pessoas', component: PessoaPesquisaComponent},
  {path: 'pessoas/novo', component: PessoaCadastroComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MensalidadePesquisaComponent,
    NavbarComponent,
    PessoaPesquisaComponent,
    PessoaCadastroComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    FormsModule,
    DropdownModule,
    RouterModule.forRoot(routes),
    InputSwitchModule,
    CalendarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
