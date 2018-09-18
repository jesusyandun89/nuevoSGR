import { BuscarEquiposModule } from './buscar-equipos.module';

describe('BuscarEquiposModule', () => {
  let buscarEquiposModule: BuscarEquiposModule;

  beforeEach(() => {
    buscarEquiposModule = new BuscarEquiposModule();
  });

  it('should create an instance', () => {
    expect(buscarEquiposModule).toBeTruthy();
  });
});
