import { TestBed, inject } from '@angular/core/testing';

import { CrearEquiposService } from './crear-equipos.service';

describe('CrearEquiposService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrearEquiposService]
    });
  });

  it('should be created', inject([CrearEquiposService], (service: CrearEquiposService) => {
    expect(service).toBeTruthy();
  }));
});
