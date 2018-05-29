import { AuthService } from './../../seguranca/auth.service';
import { Component, OnInit } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { MensalidadePesquisaComponent } from './../../mensalidades/mensalidade-pesquisa/mensalidade-pesquisa.component';
import { PessoaPesquisaComponent } from './../../pessoas/pessoa-pesquisa/pessoa-pesquisa.component';

const routes: Routes = [
  {path: 'mensalidades', component: MensalidadePesquisaComponent},
  {path: 'pessoas', component: PessoaPesquisaComponent}
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private auth: AuthService) { }

}
