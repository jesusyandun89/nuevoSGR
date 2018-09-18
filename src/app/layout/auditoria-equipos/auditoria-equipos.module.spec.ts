import { AuditoriaEquiposModule } from './auditoria-equipos.module';

describe('AuditoriaEquiposModule', () => {
  let auditoriaEquiposModule: AuditoriaEquiposModule;

  beforeEach(() => {
    auditoriaEquiposModule = new AuditoriaEquiposModule();
  });

  it('should create an instance', () => {
    expect(auditoriaEquiposModule).toBeTruthy();
  });
});
