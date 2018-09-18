import { CambiarModeloModule } from './cambiar-modelo.module';

describe('CambiarModeloModule', () => {
  let cambiarModeloModule: CambiarModeloModule;

  beforeEach(() => {
    cambiarModeloModule = new CambiarModeloModule();
  });

  it('should create an instance', () => {
    expect(cambiarModeloModule).toBeTruthy();
  });
});
