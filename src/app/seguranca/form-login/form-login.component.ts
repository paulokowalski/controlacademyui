import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  constructor(private auth: AuthService,
  private messageService: MessageService,
  private router: Router) { }

  login(form: NgForm) {
    this.auth.login(form.value.email, form.value.senha)
        .then(() => {
          this.router.navigate(['/pessoas'])
        })
        .catch(erro => {
          this.messageService.add({severity: 'error', detail: erro});
        });
  }
}
