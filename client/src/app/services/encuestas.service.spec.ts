import { TestBed } from '@angular/core/testing';

import { EncuestasService } from './encuestas.service';

describe('EncuestasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EncuestasService = TestBed.get(EncuestasService);
    expect(service).toBeTruthy();
  });
});
