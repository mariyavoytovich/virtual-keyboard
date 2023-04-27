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
    this.bindKeyboardEvents(element);
    return element;
  }

  bindKeyboardEvents(keyboardElement){
    keyboardElement.addEventListener('mousedown', (event)=> this.mouseDownEventHandler(event));
    keyboardElement.addEventListener('mouseup', (event) => this.mouseUpEventHandler(event));
  }

  mouseDownEventHandler(event){
    const target = this.getTargetElement(event);
    if(this.isButton(target))
    {
      this.handleButtonPress(target);
      target.classList.add(buttonCssClasses.PRESSED_BUTTON);
    }
  }

  mouseUpEventHandler(event){
    const target = this.getTargetElement(event);
    if(this.isButton(target))
    {
      target.classList.remove(buttonCssClasses.PRESSED_BUTTON);
    }
  }

  getTargetElement(event){
    const target = event.target;
    return  target.tagName === 'SPAN' ? target.closest('div') : target;
  }

  isButton(element){
    return element.classList.contains(buttonCssClasses.KEYBOARD_BUTTON);
  }

  handleButtonPress(buttonElement){
    console.log(buttonElement.textContent);
    this._textEditor.print(buttonElement.textContent);
  }
}