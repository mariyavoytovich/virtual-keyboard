import { ItemElement } from "../Base/ItemElement";
import { keyCase } from "./static/KeyCase";

export const cssClasses = {
  KEYBOARD_BUTTON: 'keyboard-button',
  BUTTON: 'button',
  PRESSED_BUTTON: 'pressed'
}

export class Button extends ItemElement {

  constructor({ key, shiftKey, code, location, keyType }) {
    super();
    this._key = key;
    this._shiftKey = shiftKey;
    this._code = code;
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

    const keyDown = this.createKeyElement(this._key, keyCase.DOWN);
    const keyUp = this.createKeyElement(this._shiftKey, keyCase.UP);

    button.append(keyDown);
    button.append(keyUp);
    return button;
  }

  createKeyElement(key, caseKey){
    const keyElement = this.createDomNode('span', caseKey);
    keyElement.textContent = key;
    return keyElement;
  }
}