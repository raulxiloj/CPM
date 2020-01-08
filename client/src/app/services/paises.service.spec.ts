import { TestBed } from '@angular/core/testing';

import { PaisesService } from './paises.service';

describe('PaisesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaisesService = TestBed.get(PaisesService);
    expect(service).toBeTruthy();
  });
});
