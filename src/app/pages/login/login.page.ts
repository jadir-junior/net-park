import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

import { Authenticated } from '../../model/authenticated';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { removeCharactersSpecialOfDigits } from '../../utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private fb: FormBuilder,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      cpf: ['', [Validators.required, Validators.minLength(14)]],
      password: ['', [Validators.required]],
    });
  }

  get cpf() {
    return this.loginForm.get('cpf');
  }

  get password() {
    return this.loginForm.get('password');
  }

  async login({ value, valid }): Promise<void> {
    if (!valid) {
      return;
    }

    value.cpf = removeCharactersSpecialOfDigits(value.cpf);
    const user = value;

    try {
      const authenticated: Authenticated = await this.authenticationService.login(
        user
      );
      await this.authenticationService.setTokenStorage(authenticated);
      this.loginForm.reset();
    } catch (err) {
      const toast = await this.toastController.create({
        message: err.message,
        duration: 2000,
        color: 'danger',
      });
      toast.present();
    }
  }
}
