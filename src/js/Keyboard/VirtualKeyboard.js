import { GroupElement } from "../Base/GroupElement";
import { KeyboardRow } from "./KeyboardRow";
import { keysByRows } from "./static/Keys";
import { cssClasses as buttonCssClasses} from "./Button";

const cssClasses = {
  VIRTUAL_KEYBOARD: 'virtual-keyboard'
}

export class VirtualKeyboard extends GroupElement {

  constructor(textEditor){
    super();
    this._textEditor = textEditor;
  }

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
    const element = this.createDomNode('div', cssClasses.VIRTUAL_KEYBOARD);
    element.addEventListener('click', (event) => this.elementClickHandler(event));
    return element;
  }

  elementClickHandler(event){
    const target = event.target.tagName === 'SPAN' ? event.target.closest('.key-button') : event.target;

    if (target.classList.contains(buttonCssClasses.KEYBOARD_BUTTON)){
      this.handleButtonClick(target)
    }
  }

  handleButtonClick(buttonElement){
    console.log(buttonElement.textContent);
    this._textEditor.print(buttonElement.textContent);
  }
}