import { TestBed } from '@angular/core/testing';

import { CaracteresService } from './caracteres.service';

describe('CaracteresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaracteresService = TestBed.get(CaracteresService);
    expect(service).toBeTruthy();
  });
});
