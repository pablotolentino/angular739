import { DecoradorPipe } from './decorador.pipe';

describe('DecoradorPipe', () => {
  it('create an instance', () => {
    const pipe = new DecoradorPipe();
    expect(pipe).toBeTruthy();
  });
});
