import { GroupElement } from "../Base/GroupElement";
import { KeyboardRow } from "./KeyboardRow";
import { keysByRows } from "./constants/Keys";
import { cssClasses as buttonCssClasses } from "./Button";
import { keyType } from "./constants/KeyType";
import { keyCase } from "./constants/KeyCase";

const cssClasses = {
  VIRTUAL_KEYBOARD: 'virtual-keyboard',
  HIDDEN: 'hidden'
}

export class VirtualKeyboard extends GroupElement {
  _eventHandlers;
  _keyboard;

  constructor(textEditor) {
    super();
    this._textEditor = textEditor;
    this.state = {
      case: keyCase.DOWN
    }
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

  show(container) {
    super.show(container);
    this.toggleButtonsCharacterCase();
  }

  createElement() {
    const element = this.createDomNode('div', cssClasses.VIRTUAL_KEYBOARD);
    this.bindKeyboardEvents(element);
    this._keyboard = element;
    return element;
  }

  bindKeyboardEvents(keyboardElement) {
    keyboardElement.addEventListener('mousedown', (event) => this.mouseDownEventHandler(event));
    keyboardElement.addEventListener('mouseup', (event) => this.mouseUpEventHandler(event));
  }

  mouseDownEventHandler(event) {
    const target = this.getTargetElement(event);
    if (this.isButton(target)) {
      this.pressButtonHandler(target);
    }
  }

  pressButtonHandler(button) {
    if(!this.isCapsLockButton(button))
      this.pressButton(button);
    else 
      this.togglePress(button);

    this.handleButton(button);
  }

  handleButton(button){
    const handler = this.getButtonHandler(button);
    handler(button);
  }

  pressButton(button) {
    button.classList.add(buttonCssClasses.PRESSED_BUTTON);
  }

  togglePress(button){
    button.classList.toggle(buttonCssClasses.PRESSED_BUTTON);
  }

  mouseUpEventHandler(event) {
    const target = this.getTargetElement(event);
    if (this.isButton(target) && !this.isCapsLockButton(target)) {
      if(this.isShiftButton(target)){
        this.handleButton(target)      
      }
      this.unpressButton(target);
    }
  }

  unpressButton(button) {
    button.classList.remove(buttonCssClasses.PRESSED_BUTTON);
  }

  getTargetElement(event) {
    const target = event.target;
    return target.tagName === 'SPAN' ? target.closest('div') : target;
  }

  isButton(element) {
    return element.classList.contains(buttonCssClasses.KEYBOARD_BUTTON);
  }

  isCapsLockButton(button){
    return button.getAttribute('type') === keyType.CAPSLOCK;
  }

  isShiftButton(button){
    return button.getAttribute('type') === keyType.SHIFT;
  }

  getButtonHandler(button) {
    const buttonType = button.getAttribute('type');
    return this._eventHandlers[buttonType];
  }

  getButtonHandlers() {
    return {
      [keyType.KEY]: this.keyButtonHandler.bind(this),
      [keyType.BACKSPACE]: this.backspaceButtonHandler.bind(this),
      [keyType.CAPSLOCK]: this.capsLockButtonHandler.bind(this),
      [keyType.ENTER]: this.enterButtonHandler.bind(this),
      [keyType.SPACE]: this.spaceButtonHandler.bind(this),
      [keyType.TAB]: this.tabButtonHandler.bind(this),
      [keyType.SHIFT]: this.shiftButtonHandler.bind(this)
    }
  }

  keyButtonHandler(button) {
    const printedElement = button.querySelector(`.${this.state.case}`);
    this._textEditor.print(printedElement.textContent);
  }

  backspaceButtonHandler(button) {
    this._textEditor.removeLeft();
  }

  spaceButtonHandler(button) {
    this._textEditor.print(' ');
  }

  capsLockButtonHandler(button) {
    this.toggleCase();
    this.toggleButtonsCharacterCase();
  }

  shiftButtonHandler(button){
    this.toggleCase();
    this.toggleButtonsCharacterCase();
  }

  enterButtonHandler(button) {
    this._textEditor.print('\n');
  }

  tabButtonHandler(button) {
    this._textEditor.print('    ');
  }

  toggleButtonsCharacterCase() {
    const spans = this._keyboard.querySelectorAll(`.${buttonCssClasses.KEYBOARD_BUTTON} span`);
    spans.forEach(span => {
      if (span.classList.contains(this.state.case))
        this.showElement(span);
      else
        this.hideElement(span);
    });
  }

  hideElement(element) {
    element.classList.add(cssClasses.HIDDEN);
  }

  showElement(element) {
    element.classList.remove(cssClasses.HIDDEN);
  }

  toggleCase(){
    const currentCase = this.state.case;
    const newCase = currentCase === keyCase.UP ? keyCase.DOWN : keyCase.UP;
    this.state.case = newCase;
  }
}