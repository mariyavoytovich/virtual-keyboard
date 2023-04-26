import { GroupElement } from "../Base/GroupElement";
import { KeyboardRow } from "./KeyboardRow";
import { keysByRows } from "./static/Keys";

const cssClasses = {
  VIRTUAL_KEYBOARD: 'virtual-keyboard'
}

export class VirtualKeyboard extends GroupElement {

  init() {
    this.createRows();
  }

  createRows() {
    for (let keysByRow of keysByRows) {
      const row = new KeyboardRow();
      row.init(keysByRow);
      this.addElement(row);
    }
  }

  createElement() {
    return this.createDomNode('div', cssClasses.VIRTUAL_KEYBOARD);
  }
}