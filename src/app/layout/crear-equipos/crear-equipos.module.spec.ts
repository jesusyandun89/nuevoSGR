import { CrearEquiposModule } from './crear-equipos.module';

describe('CrearEquiposModule', () => {
  let crearEquiposModule: CrearEquiposModule;

  beforeEach(() => {
    crearEquiposModule = new CrearEquiposModule();
  });

  it('should create an instance', () => {
    expect(crearEquiposModule).toBeTruthy();
  });
});
