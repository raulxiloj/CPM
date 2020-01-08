import { TestBed } from '@angular/core/testing';

import { ProfsService } from './profs.service';

describe('ProfsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfsService = TestBed.get(ProfsService);
    expect(service).toBeTruthy();
  });
});
