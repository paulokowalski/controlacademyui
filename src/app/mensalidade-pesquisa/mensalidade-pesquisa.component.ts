import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensalidade-pesquisa',
  templateUrl: './mensalidade-pesquisa.component.html',
  styleUrls: ['./mensalidade-pesquisa.component.css']
})
export class MensalidadePesquisaComponent {

  mensalidades = [
    {pessoa: 'João', dataVencimento: new Date(2018, 0, 10), dataPagamento: new Date(2018, 0, 10), valor: 85.50},
    {pessoa: 'João', dataVencimento: new Date(2018, 1, 10), dataPagamento: null, valor: 85.50},
    {pessoa: 'João', dataVencimento: new Date(2018, 3, 10), dataPagamento: null, valor: 85.50},
    {pessoa: 'João', dataVencimento: new Date(2018, 4, 10), dataPagamento: new Date(2018, 4, 10), valor: 85.50},
    {pessoa: 'João', dataVencimento: new Date(2018, 5, 10), dataPagamento: new Date(2018, 5, 10), valor: 85.50},
  ];

}
