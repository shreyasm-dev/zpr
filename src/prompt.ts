import { PromptElement, PromptDefault, PromptText } from './prompt-element';

/*

Example usage:

new Prompt() // Each modifier returns a new instance
  .time24()
  .text(' ')
  .time12Meridian()
  .text(' ')
  .cwdFromHome()
  .text('$ ');

*/

export default class {
  private elements: PromptElement[] = [];

  text(text: string) {
    this.elements.push(new PromptText(text));
    return this;
  }

  hostname() {
    this.elements.push(PromptDefault.hostname);
    return this;
  }

  fullHostname() {
    this.elements.push(PromptDefault.fullHostname);
    return this;
  }

  username() {
    this.elements.push(PromptDefault.username);
    return this;
  }

  lastCommandStatus() {
    this.elements.push(PromptDefault.lastCommandStatus);
    return this;
  }

  cwd() {
    this.elements.push(PromptDefault.cwd);
    return this;
  }

  cwdFromHome() {
    this.elements.push(PromptDefault.cwdFromHome);
    return this;
  }

  historyEventNumber() {
    this.elements.push(PromptDefault.historyEventNumber);
    return this;
  }

  yymmdd() {
    this.elements.push(PromptDefault.yymmdd);
    return this;
  }

  time24() {
    this.elements.push(PromptDefault.time24);
    return this;
  }

  time12Meridian() {
    this.elements.push(PromptDefault.time12Meridian);
    return this;
  }

  time24Seconds() {
    this.elements.push(PromptDefault.time24Seconds);
    return this;
  }

  dd() {
    this.elements.push(PromptDefault.dd);
    return this;
  }

  mmddyy() {
    this.elements.push(PromptDefault.mmddyy);
    return this;
  }

  colorOpen(color: string) {
    this.elements.push(new PromptText(`%F{${color}}`));
    return this;
  }

  colorClose() {
    this.elements.push(new PromptText('%f'));
    return this;
  }

  toString() {
    return this.elements
      .map((element) => {
        if (element instanceof PromptText) {
          return element.toString();
        } else {
          return `%${element}`;
        }
      })
      .join('');
  }

  export(variable = 'PROMPT') {
    return `${variable}="${this.toString()}"`;
  }
}
