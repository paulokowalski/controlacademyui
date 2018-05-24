import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class Pessoa {
  nome: string;
  email: string;
  cpf: string;
  dataNascimento: string;
  status: boolean;
}

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();
  br: any;

  ngOnInit() {
    this.pessoa.status = true;
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
  }

  salvar(form: NgForm) {
    console.log(this.pessoa);


    form.reset({status: true});
  }

}
