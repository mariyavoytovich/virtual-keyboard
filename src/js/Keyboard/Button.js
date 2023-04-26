import { ItemElement } from "../Base/ItemElement";

const cssClasses = {
  KEYBOARD_BUTTON: 'keyboard-button',
  BUTTON: 'button'
}

export class Button extends ItemElement {
  _keyCode;
  _key;
  _keyCode;

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
    const container = this.createDomNode('div', cssClasses.KEYBOARD_BUTTON, cssClasses.BUTTON);
    const key = this.createDomNode('span');
    key.textContent = this._key;
    container.append(key);
    return container;
  }
}