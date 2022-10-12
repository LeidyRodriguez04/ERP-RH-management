import { TestBed } from '@angular/core/testing';

import { ListarContactosServicioService } from './listar-contactos-servicio.service';

describe('ListarContactosServicioService', () => {
  let service: ListarContactosServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarContactosServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
