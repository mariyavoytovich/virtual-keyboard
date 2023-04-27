import { GroupElement } from "../Base/GroupElement";
import { KeyboardRow } from "./KeyboardRow";
import { keysByRows } from "./static/Keys";
import { cssClasses as buttonCssClasses} from "./Button";
import {keyType} from "./static/KeyType";

const cssClasses = {
  VIRTUAL_KEYBOARD: 'virtual-keyboard'
}

export class VirtualKeyboard extends GroupElement {
  _eventHandlers;

  constructor(textEditor){
    super();
    this._textEditor = textEditor;
  }

  init() {
    this.createRows();
    this._eventHandlers = this.getButtonHandlers();
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
      this.pressButtonHandler(target);
    }
  }

  pressButtonHandler(button){
    this.pressButton(button);
    const handler = this.getButtonHandler(button);
    handler(button);
  }

  pressButton(button){
    button.classList.add(buttonCssClasses.PRESSED_BUTTON);
  }

  mouseUpEventHandler(event){
    const target = this.getTargetElement(event);
    if(this.isButton(target))
    {
      this.unpressButton(target);
    }
  }

  unpressButton(button){
    button.classList.remove(buttonCssClasses.PRESSED_BUTTON);
  }

  getTargetElement(event){
    const target = event.target;
    return target.tagName === 'SPAN' ? target.closest('div') : target;
  }

  isButton(element){
    return element.classList.contains(buttonCssClasses.KEYBOARD_BUTTON);
  }

  getButtonHandler(button){
    const buttonType = button.getAttribute('type');
    return this._eventHandlers[buttonType];
  }

  getButtonHandlers(){
    return {
      [keyType.KEY]: this.keyButtonHandler.bind(this),
      [keyType.BACKSPACE]: this.backspaceButtonHandler.bind(this),
      [keyType.CAPSLOCK]: this.capsLockButtonHandler,
      [keyType.ENTER]: this.enterButtonHandler.bind(this),
      [keyType.SPACE]: this.spaceButtonHandler.bind(this),
      [keyType.TAB]: this.tabButtonHandler.bind(this)
    }
  }

  keyButtonHandler(button){ 
    this._textEditor.print(button.textContent);
  }

  backspaceButtonHandler(button) {
    this._textEditor.removeLeft();
  }

  spaceButtonHandler(button){
    this._textEditor.print(' ');
  }

  capsLockButtonHandler(button) {}
  enterButtonHandler(button) {
    this._textEditor.print('\n');
  }

  tabButtonHandler(button){
    this._textEditor.print('    ');
  }
}