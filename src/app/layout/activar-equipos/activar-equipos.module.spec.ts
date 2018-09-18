import { ActivarEquiposModule } from './activar-equipos.module';

describe('ActivarEquiposModule', () => {
  let activarEquiposModule: ActivarEquiposModule;

  beforeEach(() => {
    activarEquiposModule = new ActivarEquiposModule();
  });

  it('should create an instance', () => {
    expect(activarEquiposModule).toBeTruthy();
  });
});
