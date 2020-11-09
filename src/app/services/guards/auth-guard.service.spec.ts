import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicStorageModule } from '@ionic/storage';

import { AuthGuard } from './auth-guard.service';

describe('AuthGuardService', () => {
  let service: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, IonicStorageModule.forRoot()],
    });
    service = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
