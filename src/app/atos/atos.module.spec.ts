import { AtosModule } from './atos.module';

describe('AtosModule', () => {
  let atosModule: AtosModule;

  beforeEach(() => {
    atosModule = new AtosModule();
  });

  it('should create an instance', () => {
    expect(atosModule).toBeTruthy();
  });
});
