import { TestBed } from '@angular/core/testing';

import { InventoresService } from './inventores.service';

describe('InventoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InventoresService = TestBed.get(InventoresService);
    expect(service).toBeTruthy();
  });
});
