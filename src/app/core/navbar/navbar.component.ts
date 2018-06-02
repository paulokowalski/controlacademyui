import { AuthService } from './../../seguranca/auth.service';
import { Component, OnInit } from '@angular/core';

import { Routes, RouterModule, Router } from '@angular/router';

import { MensalidadePesquisaComponent } from './../../mensalidades/mensalidade-pesquisa/mensalidade-pesquisa.component';
import { PessoaPesquisaComponent } from './../../pessoas/pessoa-pesquisa/pessoa-pesquisa.component';
import { LogoutService } from '../../seguranca/logout.service';

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

  constructor(private auth: AuthService,
              private logoutService: LogoutService,
              private router: Router) { }

  logout() {
    this.logoutService.logout()
        .then(() => {
          this.router.navigate(['/login']);
        })
        .catch(response => console.log(response));
  }

}
