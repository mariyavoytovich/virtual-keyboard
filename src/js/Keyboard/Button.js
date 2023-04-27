import { ItemElement } from "../Base/ItemElement";

export const cssClasses = {
  KEYBOARD_BUTTON: 'keyboard-button',
  BUTTON: 'button',
  PRESSED_BUTTON: 'pressed'
}

export class Button extends ItemElement {

  constructor({ key, shiftKey, code, keyCode, location, keyType }) {
    super();
    this._key = key;
    this._shiftKey = shiftKey;
    this._code = code;
    this._keyCode = keyCode;
    this._location = location;
    this._keyType = keyType;
  }

  createElement() {
    const buttonClasses = [
      cssClasses.KEYBOARD_BUTTON,
      cssClasses.BUTTON,
      `${this._keyType}-${cssClasses.BUTTON}`,
      this._location ]

    const button = this.createDomNode('div', ...buttonClasses);
    button.setAttribute('type', this._keyType);

    const key = this.createDomNode('span');
    key.textContent = this._key;

    button.append(key);
    return button;
  }
}