import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicStorageModule } from '@ionic/storage';

import { ExtractService } from './extract.service';

describe('ExtractService', () => {
  let service: ExtractService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, IonicStorageModule.forRoot()],
    });
    service = TestBed.inject(ExtractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
