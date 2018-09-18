import { EliminarEquiposModule } from './eliminar-equipos.module';

describe('EliminarEquiposModule', () => {
  let eliminarEquiposModule: EliminarEquiposModule;

  beforeEach(() => {
    eliminarEquiposModule = new EliminarEquiposModule();
  });

  it('should create an instance', () => {
    expect(eliminarEquiposModule).toBeTruthy();
  });
});
