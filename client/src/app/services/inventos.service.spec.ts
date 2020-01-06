import { TestBed } from '@angular/core/testing';

import { InventosService } from './inventos.service';

describe('InventosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InventosService = TestBed.get(InventosService);
    expect(service).toBeTruthy();
  });
});
