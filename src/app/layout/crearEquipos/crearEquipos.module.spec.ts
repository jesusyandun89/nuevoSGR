import { crearEquiposModule } from './crearEquipos.module';

describe('crearEquiposModule', () => {
  let crearEquiposModule: crearEquiposModule;

  beforeEach(() => {
    crearEquiposModule = new crearEquiposModule();
  });

  it('should create an instance', () => {
    expect(crearEquiposModule).toBeTruthy();
  });
});
