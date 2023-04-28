import { GroupElement } from "../Base/GroupElement";
import { KeyboardRow } from "./KeyboardRow";
import { cssClasses as buttonCssClasses } from "./Button";
import { KEY_TYPE } from "./constants/KeyType";
import { KEY_CASE } from "./constants/KeyCase";
import { KEYBOARD_SETTINGS } from "./constants/KeyboardSettings";
import { KEYBOARD_ROWS } from "./constants/KeyboardRows";

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
      case: KEYBOARD_SETTINGS.defaultKeyCase,
      language: KEYBOARD_SETTINGS.defaultLanguage,
      languages: KEYBOARD_SETTINGS.languages
    }
  }

  init() {
    this.createRows();
    this._eventHandlers = this.getButtonHandlers();
    super.init();
  }

  createRows() {
    for (let {id, buttons} of KEYBOARD_ROWS) {
      const keyboardRow = new KeyboardRow(id, buttons);
      this.addElement(keyboardRow);
    }
  }

  show(container) {
    super.show(container, this.state.language);
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
    document.addEventListener('keyup', (event) =>this.keyUpEventHandler(event));
    document.addEventListener('keydown', (event) => this.keyDownEventHandler(event));
  }

  keyUpEventHandler(event){
    const code = event.code;
    const buttonElement = this._keyboard.querySelector(`.${code}`);
    this.handleButtonUnpress(buttonElement);
  }

  keyDownEventHandler(event){
    const code = event.code;
    const buttonElement = this._keyboard.querySelector(`.${code}`);
    this.pressButtonHandler(buttonElement);
    event.preventDefault();
  }

  mouseDownEventHandler(event) {
    const target = this.getTargetElement(event);
    if (this.isButton(target)) {
      this.pressButtonHandler(target);
      event.preventDefault();
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
    if (this.isButton(target))
      this.handleButtonUnpress(target);
  }

  handleButtonUnpress(button){
    if(!this.isCapsLockButton(button)) {
      if(this.isShiftButton(button)){
        this.handleButton(button)      
      }
      this.unpressButton(button);
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
    return button.getAttribute('type') === KEY_TYPE.CAPSLOCK;
  }

  isShiftButton(button){
    return button.getAttribute('type') === KEY_TYPE.SHIFT;
  }

  getButtonHandler(button) {
    const buttonType = button.getAttribute('type');
    return this._eventHandlers[buttonType];
  }

  getButtonHandlers() {
    return {
      [KEY_TYPE.KEY]: this.keyButtonHandler.bind(this),
      [KEY_TYPE.BACKSPACE]: this.backspaceButtonHandler.bind(this),
      [KEY_TYPE.CAPSLOCK]: this.capsLockButtonHandler.bind(this),
      [KEY_TYPE.ENTER]: this.enterButtonHandler.bind(this),
      [KEY_TYPE.SPACE]: this.spaceButtonHandler.bind(this),
      [KEY_TYPE.TAB]: this.tabButtonHandler.bind(this),
      [KEY_TYPE.SHIFT]: this.shiftButtonHandler.bind(this)
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
    const newCase = currentCase === KEY_CASE.UP ? KEY_CASE.DOWN : KEY_CASE.UP;
    this.state.case = newCase;
  }
}