import { TestBed } from '@angular/core/testing';

import { AspiranteService } from './candidate.service';

describe('AspiranteService', () => {
  let service: AspiranteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AspiranteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
