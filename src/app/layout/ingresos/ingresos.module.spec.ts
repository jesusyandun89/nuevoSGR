import { IngresosModule } from './ingresos.module';

describe('IngresosModule', () => {
  let ingresosModule: IngresosModule;

  beforeEach(() => {
    ingresosModule = new IngresosModule();
  });

  it('should create an instance', () => {
    expect(ingresosModule).toBeTruthy();
  });
});
