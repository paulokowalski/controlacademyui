import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MensalidadePesquisaComponent } from './mensalidade-pesquisa/mensalidade-pesquisa.component';

import { DataTableModule } from 'primeng/datatable';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    FormsModule,
    ButtonModule,
    TooltipModule,
    InputTextModule
  ],
  declarations: [
    MensalidadePesquisaComponent
  ],
  exports: [
    MensalidadePesquisaComponent
  ]
})
export class MensalidadesModule { }
