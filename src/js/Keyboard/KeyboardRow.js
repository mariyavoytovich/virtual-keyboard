import { UIElement } from "../Base/UIElement";
import { GroupElement } from "../Base/GroupElement";
import { Button } from "./Button";

const cssClasses = {
  KEYBOARD_ROW: 'keyboard-row',
  ROW: 'row'
}

export class KeyboardRow extends GroupElement {
  init(keys) {
    this.createButtons(keys);
  }

  createButtons(keys) {
    keys.forEach(key => { this.addElement(new Button(key)) });
  }

  createElement() {
    return this.createDomNode('div', cssClasses.KEYBOARD_ROW, cssClasses.ROW);
  }
}