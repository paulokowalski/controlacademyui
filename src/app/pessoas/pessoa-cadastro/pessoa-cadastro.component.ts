import { PessoaService } from './../../pessoa-service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';

class Pessoa {
  nome: string;
  email: string;
  cpf: string;
  dataNascimento: Date;
  ativo: boolean;
}

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})

export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();
  br: any;
  cadastroNovo: any;
  titlePage: any;
  dataNascimento: any;

  constructor(private pessoaService: PessoaService,
              private route: ActivatedRoute,
              private messageService: MessageService ) { }

  ngOnInit() {
    this.br = {
      firstDayOfWeek: 0,
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
      monthNames: ['Janeiro ', 'Fevereiro ', 'Março ', 'Abril ', 'Maio ', 'Junho ', 'Julho ',
                   'Agosto ', 'Setembro ', 'Outubro ', 'Novembro ', 'Dezembro '],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
      today: 'Today',
      clear: 'Clear'
    };

    this.cadastroNovo = this.route.snapshot.params['codigo'] !== undefined ? false : true;

    if (!this.cadastroNovo) {
      this.cadastroNovo = false;
      this.titlePage = 'Editar Pessoa';
      this.carregarPessoa(this.route.snapshot.params['codigo']);
    } else {
      this.cadastroNovo = true;
      this.pessoa.ativo = true;
      this.titlePage = 'Cadastrar Pessoa';
    }
  }

  carregarPessoa(codigo: number) {
    this.pessoaService.consultarPorCodigo(this.route.snapshot.params['codigo']).then(pessoa => this.pessoa = pessoa);
  }

   salvar(form: NgForm) {
    if (this.cadastroNovo) {
      this.pessoaService.salvar(this.pessoa).then(pessoa => this.pessoa = pessoa);
      this.messageService.add({severity: 'success', detail: 'Pessoa salva com sucesso.'});
      // form.reset({pessoa = new Pessoa()});
    } else {
      this.pessoaService.editarPeloCodigo(this.route.snapshot.params['codigo'], this.pessoa).then(pessoa => this.pessoa = pessoa);
      this.messageService.add({severity: 'success', detail: 'Pessoa atualizada com sucesso.'});
    }
  }
}
