import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Authenticated } from '../model/authenticated';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private fb: FormBuilder
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

  async login(user): Promise<void> {
    try {
      const authenticated: Authenticated = await this.authenticationService.login(
        user
      );
      await this.authenticationService.setTokenStorage(authenticated);
    } catch (err) {}
  }
}
