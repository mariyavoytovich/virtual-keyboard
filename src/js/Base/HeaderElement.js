import { ItemElement } from "./ItemElement";

const cssClasses ={
  HEADING: 'heading'
}

export class HeaderElement extends ItemElement {
  constructor(level, text) {
    super();
    this._level = level;
    this._tetxt = text;
  }

  createElement() {
    const header = this.createDomNode(`h${this._level}`, cssClasses.HEADING);
    header.textContent = this._tetxt;
    return header;
  }
}