import { PessoaService } from './../../pessoa-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent implements OnInit {

  pessoas = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
     this.pesquisar('');
  }

  pesquisar(descricao: string) {
    this.pessoaService.consultar(descricao).then(pessoas => this.pessoas = pessoas);
  }

  remover(pessoa: any) {
    this.pessoaService.removerPeloCodigo(pessoa.codigo);
    this.pesquisar('');
  }
}
