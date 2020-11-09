import { TestBed } from '@angular/core/testing';

import { WazeService } from './waze.service';

describe('WazeService', () => {
  let service: WazeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WazeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
