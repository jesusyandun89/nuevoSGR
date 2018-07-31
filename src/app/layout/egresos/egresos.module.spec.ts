import { EgresosModule } from './egresos.module';

describe('EgresosModule', () => {
  let egresosModule: EgresosModule;

  beforeEach(() => {
    egresosModule = new EgresosModule();
  });

  it('should create an instance', () => {
    expect(egresosModule).toBeTruthy();
  });
});
