import { ItemElement } from "./ItemElement";

export class PElement extends ItemElement {

  constructor(text, cssClasses) {
    super();
    this._text = text;
    this._cssClasses = cssClasses;
  }

  createElement() {
    const p = this.createDomNode('p', ...this._cssClasses);
    p.textContent = this._text;
    return p;
  }
}