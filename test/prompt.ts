import Prompt from '../src/main';
import { expect } from 'chai';

describe('Prompt', () => {
  it('should be a class', () => {
    expect(Prompt).to.be.a('function');
  });

  it('should have a constructor', () => {
    expect(new Prompt()).to.be.an('object');
  });

  [
    'text',
    'hostname',
    'fullHostname',
    'username',
    'lastCommandStatus',
    'cwd',
    'cwdFromHome',
    'historyEventNumber',
    'yymmdd',
    'time24',
    'time12Meridian',
    'time24Seconds',
    'dd',
    'mmddyy',
    'substitution',
    'colorOpen',
    'colorClose',
    'toString',
  ].forEach((method) => {
    it(`should have a ${method} method`, () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect((new Prompt() as any)[method]).to.be.a('function');
    });
  });

  const prompt = new Prompt()
    .colorOpen('red')
    .text('[')
    .username()
    .text('@')
    .hostname()
    .text('] ')
    .colorClose()
    .colorOpen('green')
    .cwdFromHome()
    .colorClose()
    .colorOpen('blue')
    .text(' $ ')
    .colorClose();

  it('should use toString correctly', () => {
    expect(prompt.toString()).to.equal('%F{red}[%n@%m] %f%F{green}%~%f%F{blue} $ %f');
  });
});
