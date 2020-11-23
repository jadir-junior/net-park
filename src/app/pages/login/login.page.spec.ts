import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        IonicStorageModule.forRoot(),
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should cpf field validity', () => {
    const cpf = component.loginForm.controls['cpf'];
    expect(cpf.valid).toBeFalsy();
  });

  // it('should if submit form empty have a message', () => {
  //   component.login(component.loginForm);
  //   fixture.detectChanges();

  //   const errorCPF = fixture.debugElement.queryAll(By.css('error-message'));

  //   expect(errorCPF).toMatch('CPF é obrigatório.');
  // });
});
