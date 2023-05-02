import { GroupElement } from "../Base/GroupElement";
import { Button } from "./Button";
import { KEYBOARD_BUTTONS } from "./constants/KeyboardButtons";

const cssClasses = {
  KEYBOARD_ROW: 'keyboard-row',
  ROW: 'row'
}

export class KeyboardRow extends GroupElement {
  constructor(id, buttons)
  {
    super();
    this.id = id;
    this.buttons = buttons;
  }

  init() {
    this.createButtons();
    super.init();
  }

  createButtons() {
    this.buttons.forEach(buttonCode => {
     const { location, keyType } = KEYBOARD_BUTTONS[buttonCode];
     const button = new Button(buttonCode, location, keyType);
     this.addElement(button);
    });
  }

  createElement() {
    return this.createDomNode('div', cssClasses.KEYBOARD_ROW, cssClasses.ROW);
  }
}