export type PromptElement = PromptText | PromptDefault;

export enum PromptDefault {
  hostname = 'm',
  fullHostname = 'M',
  username = 'n',
  lastCommandStatus = '?',
  cwd = 'd',
  cwdFromHome = '~',
  historyEventNumber = 'h',
  yymmdd = 'D',
  time24 = 'T',
  time12Meridian = 't',
  time24Seconds = '*',
  dd = 'w',
  mmddyy = 'W',
}

export class PromptText {
  private text: string;

  constructor(text: string) {
    this.text = text;
  }

  toString() {
    return this.text;
  }
}
