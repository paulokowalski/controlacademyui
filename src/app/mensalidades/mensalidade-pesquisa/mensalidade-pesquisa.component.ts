import { MensalidadeService } from './../../mensalidade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensalidade-pesquisa',
  templateUrl: './mensalidade-pesquisa.component.html',
  styleUrls: ['./mensalidade-pesquisa.component.css']
})
export class MensalidadePesquisaComponent implements OnInit {

  constructor(private mensalidadeService: MensalidadeService) {}

  mensalidades = [ ];

  ngOnInit() {
    this.pesquisar();
 }

 pesquisar() {
   this.mensalidadeService.consultar().then(mensalidades => this.mensalidades = mensalidades);
 }

}
