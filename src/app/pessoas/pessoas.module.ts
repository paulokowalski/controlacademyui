import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';

import { DataTableModule } from 'primeng/datatable';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    FormsModule,
    InputMaskModule,
    CalendarModule,
    InputSwitchModule,
    TooltipModule,
    InputTextModule,
    ButtonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    PessoaPesquisaComponent,
    PessoaCadastroComponent
  ],
  exports: [
    PessoaPesquisaComponent,
    PessoaCadastroComponent
  ]
})
export class PessoasModule { }
