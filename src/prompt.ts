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


  /**
   * Add a text element to the prompt
   * 
   * @param text The text to add
   * @returns this
  */
  text(text: string) {
    this.elements.push(new PromptText(text));
    return this;
  }

  /**
   * Add a hostname element to the prompt
   * 
   * @returns this
   */
  hostname() {
    this.elements.push(PromptDefault.hostname);
    return this;
  }

  /**
   * Add a full hostname element to the prompt
   * 
   * @returns this
   */
  fullHostname() {
    this.elements.push(PromptDefault.fullHostname);
    return this;
  }

  /**
   * Add a username element to the prompt
   * 
   * @returns this
   */
  username() {
    this.elements.push(PromptDefault.username);
    return this;
  }

  /**
   * Add a last command status element to the prompt
   * 
   * @returns this
   */
  lastCommandStatus() {
    this.elements.push(PromptDefault.lastCommandStatus);
    return this;
  }

  /**
   * Add a current working directory element to the prompt
   * 
   * @returns this
   */
  cwd() {
    this.elements.push(PromptDefault.cwd);
    return this;
  }

  /**
   * Add a current working direct element to the prompt, relative to the home directory
   * 
   * @returns this
   */
  cwdFromHome() {
    this.elements.push(PromptDefault.cwdFromHome);
    return this;
  }

  /**
   * Add a history event number element to the prompt
   * 
   * @returns this
   */
  historyEventNumber() {
    this.elements.push(PromptDefault.historyEventNumber);
    return this;
  }

  /**
   * Add a date element to the prompt (yy-mm-dd)
   * 
   * @returns this
   */
  yymmdd() {
    this.elements.push(PromptDefault.yymmdd);
    return this;
  }

  /**
   * Add a time element to the prompt (24 hour, hh:mm)
   * 
   * @returns this
   */
  time24() {
    this.elements.push(PromptDefault.time24);
    return this;
  }

  /**
   * Add a time element to the prompt (12 hour, hh:mm AM/PM)
   * 
   * @returns this
   */
  time12Meridian() {
    this.elements.push(PromptDefault.time12Meridian);
    return this;
  }

  /**
   * Add a time element to the prompt (24 hour, hh:mm:ss)
   * 
   * @returns this
   */
  time24Seconds() {
    this.elements.push(PromptDefault.time24Seconds);
    return this;
  }

  /**
   * Add a day of the week element to the prompt (Sun-Sat dd)
   * 
   * @returns this
   */
  dd() {
    this.elements.push(PromptDefault.dd);
    return this;
  }

  /**
   * Add a date element to the prompt (mm/dd/yy)
   * 
   * @returns this
   */
  mmddyy() {
    this.elements.push(PromptDefault.mmddyy);
    return this;
  }

  /**
   * Any text after this element will be colored
   * 
   * @returns this
   */
  colorOpen(color: string) {
    this.elements.push(new PromptText(`%F{${color}}`));
    return this;
  }

  /**
   * Any text after this element will not be colored
   * 
   * @returns this
   */
  colorClose() {
    this.elements.push(new PromptText('%f'));
    return this;
  }

  /**
   * Convert the prompt to a string
   * 
   * @returns The prompt as a string
   * 
   * @example
   * ```typescript
   * const prompt = new Prompt()
   *   .time24()
   *   .text(' ')
   *   .time12Meridian()
   *   .text(' ')
   *   .cwdFromHome()
   *   .text('$ ');
   * 
   * console.log(prompt.toString());
   * ```
   */
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

  /**
   * Export the prompt as a string that can be used in a shell script
   * 
   * @param variable The name of the variable to export
   * @remarks The default variable is `PROMPT`
   * @returns The prompt as a string
   */
  export(variable = 'PROMPT') {
    return `${variable}="${this.toString()}"`;
  }
}
