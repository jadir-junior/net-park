import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { ExtractComponent } from './extract.component';

describe('ExtractComponent', () => {
  let component: ExtractComponent;
  let fixture: ComponentFixture<ExtractComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ExtractComponent],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(ExtractComponent);
      component = fixture.componentInstance;
      component.extract = {
        valor: '29.90',
        garagem: 'Paulist',
        codGaragem: '111',
        dataEntrada: '2020-03-25T12:00:00Z',
        dataSaida: '2020-03-25T13:00:00Z',
        endereco: 'AV PAULISTA 900',
      };
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render (data de entrada)', () => {
  //   const dataDeEntrada: HTMLElement = fixture.debugElement.query(
  //     By.css('.card-extract--date')
  //   ).nativeElement;
  //   expect(dataDeEntrada.textContent).toEqual('25/03/2020');
  // });
});
