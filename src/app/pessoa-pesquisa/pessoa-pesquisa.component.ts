import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent {

  pessoas = [
    { nome: 'Paulo', estado: 'CE', cidade: 'Fortaleza', status: true },
    { nome: 'Maria', estado: 'CE', cidade: 'Fortaleza', status: false },
    { nome: 'Sabrine', estado: 'CE', cidade: 'Fortaleza', status: true },
    { nome: 'Carol', estado: 'CE', cidade: 'Fortaleza', status: true },
    { nome: 'Aline', estado: 'CE', cidade: 'Fortaleza', status: true }
  ];

}
