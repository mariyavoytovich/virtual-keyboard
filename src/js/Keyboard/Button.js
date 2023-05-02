import { ItemElement } from "../Base/ItemElement";
import { KEY_CASE } from "./constants/KeyCase";
import { getButtonKeyValuesByLanguage } from "./constants/Language";

export const cssClasses = {
  KEYBOARD_BUTTON: 'keyboard-button',
  BUTTON: 'button',
  PRESSED_BUTTON: 'pressed'
}

export class Button extends ItemElement {

  constructor(code, location, keyType) {
    super();
    this._code = code;
    this._location = location;
    this._keyType = keyType;
  }

  createElement(language) {
    const buttonClasses = [
      cssClasses.KEYBOARD_BUTTON,
      cssClasses.BUTTON,
      `${this._keyType}-${cssClasses.BUTTON}`,
      this._location,
      this._code]

    const button = this.createDomNode('div', ...buttonClasses);
    button.setAttribute('type', this._keyType);

    const { key, shiftKey } = getButtonKeyValuesByLanguage(this._code, language);

    this._keyDown = this.createKeyElement(key, KEY_CASE.DOWN);
    this._keyUp = this.createKeyElement(shiftKey, KEY_CASE.UP);

    button.append(this._keyDown);
    button.append(this._keyUp);
    return button;
  }

  createKeyElement(key, caseKey) {
    const keyElement = this.createDomNode('span', caseKey);
    keyElement.textContent = key;
    return keyElement;
  }

  refresh(language){
    this.updatesKeysElements(language);
  }

  updatesKeysElements(language){
    const { key, shiftKey } = getButtonKeyValuesByLanguage(this._code, language);

    this._keyDown.textContent = key;
    this._keyUp.textContent = shiftKey;
  }
}