import { ItemElement } from "../Base/ItemElement";

export const cssClasses = {
  KEYBOARD_BUTTON: 'keyboard-button',
  BUTTON: 'button'
}

export class Button extends ItemElement {

  constructor({ key, shiftKey, code, keyCode, location, keyName }) {
    super();
    this._key = key;
    this._shiftKey = shiftKey;
    this._code = code;
    this._keyCode = keyCode;
    this._location = location;
    this._keyName = keyName;
  }

  createElement() {
    const buttonClasses = [
      cssClasses.KEYBOARD_BUTTON,
      cssClasses.BUTTON,
      `${this._keyName}-${cssClasses.BUTTON}`,
      this._location ]

    const container = this.createDomNode('div', ...buttonClasses);
    const key = this.createDomNode('span');
    key.textContent = this._key;
    container.append(key);
    return container;
  }
}