import { Injectable } from '@angular/core';

@Injectable()
export class EmptyTextService {
  emptyTextDisplay: string = 'empty text 1222';

  constructor() {}

  get(): string {
    return this.emptyTextDisplay;
  }

  set(emptyTextDisplay: string) {
    this.emptyTextDisplay = emptyTextDisplay;
  }
}
