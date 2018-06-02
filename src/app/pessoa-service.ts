import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import * as moment from 'moment';
import 'moment/locale/pt-br';

class Pessoa {
  nome: string;
  email: string;
  cpf: string;
  dataNascimento: Date;
  ativo: boolean;
}

@Injectable()
export class PessoaService {

  consultaUrl = 'http://localhost:8080/pessoas';

  constructor(private http: AuthHttp) { }

  consultar(nome: string): Promise<any> {
    console.log(`${this.consultaUrl}/` + (nome === '' ? '' : `consultar/` + nome));
    return this.http.get(`${this.consultaUrl}/` + (nome === '' ? '' : `consultar/` + nome))
                    .toPromise()
                    .then(response => response.json());
  }

  consultarPorCodigo(codigo: number): Promise<Pessoa> {
    return this.http.get(`${this.consultaUrl}/` + codigo)
                    .toPromise()
                    .then(response => {
                      const pessoas = response.json() as Pessoa;
                      this.converterStringsParaDatas([pessoas]);
                      return pessoas;
                    });
  }

  salvar(pessoa: Pessoa): Promise<Pessoa> {
    return this.http.post(`${this.consultaUrl}/`, pessoa)
                    .toPromise()
                    .then(response => {
                      const pessoas = response.json() as Pessoa;
                      this.converterStringsParaDatas([pessoas]);
                      return pessoas;
                    });
  }

  editarPeloCodigo(codigo: number, pessoa: Pessoa): Promise<Pessoa> {
    return this.http.put(`${this.consultaUrl}/` + codigo, pessoa)
                    .toPromise()
                    .then(response => {
                      const pessoas = response.json() as Pessoa;
                      this.converterStringsParaDatas([pessoas]);
                      return pessoas;
                    });
  }

  removerPeloCodigo(codigo: number): Promise<Pessoa> {
    return this.http.delete(`${this.consultaUrl}/` + codigo)
                    .toPromise()
                    .then(response => {
                      const pessoas = response.json() as Pessoa;
                      this.converterStringsParaDatas([pessoas]);
                      return pessoas;
                    });
  }

  private converterStringsParaDatas(pessoas: Pessoa[]) {
    for (const pessoa of pessoas) {
      if (pessoa.dataNascimento) {
        pessoa.dataNascimento = moment(pessoa.dataNascimento, 'YYYY-MM-DD').toDate();
      }
    }
  }
}
