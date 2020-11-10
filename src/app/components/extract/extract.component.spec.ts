import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExtractComponent } from './extract.component';

describe('ExtractComponent', () => {
  let component: ExtractComponent;
  let fixture: ComponentFixture<ExtractComponent>;

  beforeEach(async(() => {
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
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
