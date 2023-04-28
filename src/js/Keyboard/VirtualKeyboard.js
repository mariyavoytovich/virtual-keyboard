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

const LOCAL_STORE_LANGUAGE_ITEM = 'lang';

export class VirtualKeyboard extends GroupElement {
  _eventHandlers;
  _keyboard;

  constructor(textEditor) {
    super();
    this._textEditor = textEditor;
    this.state = {
      case: KEYBOARD_SETTINGS.defaultKeyCase,
      language: KEYBOARD_SETTINGS.defaultLanguage,
      languages: KEYBOARD_SETTINGS.languages,
    }
  }

  init() {
    this.initLanguage();
    this.createRows();
    this._eventHandlers = this.getButtonHandlers();
    super.init();
  }

  initLanguage(){
    const storedLanguage = localStorage.getItem(LOCAL_STORE_LANGUAGE_ITEM);
    if(storedLanguage)
      this.state.language = storedLanguage;
  }

  createRows() {
    for (let { id, buttons } of KEYBOARD_ROWS) {
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
    document.addEventListener('keyup', (event) => this.keyUpEventHandler(event));
    document.addEventListener('keydown', (event) => this.keyDownEventHandler(event));
  }

  keyUpEventHandler(event) {
    const code = event.code;
    const buttonElement = this._keyboard.querySelector(`.${code}`);
    if(!buttonElement)
      return;

    this.unpressButtonHandler(buttonElement);
  }

  keyDownEventHandler(event) {
    event.preventDefault();
    const code = event.code;
    const buttonElement = this._keyboard.querySelector(`.${code}`);
    if(!buttonElement)
      return;

    this.pressButtonHandler(buttonElement, event);
  }

  mouseDownEventHandler(event) {
    console.log(event);
    const target = this.getTargetElement(event);
    if (this.isButton(target)) {
      this.pressButtonHandler(target, event);
      event.preventDefault();
    }
  }

  pressButtonHandler(button, event) {
    const repeat = event.repeat;

    const buttonType = this.getButtonType(button);
    switch (buttonType) {
      case KEY_TYPE.CAPSLOCK:
        if (!repeat) { this.togglePress(button), this.handleButton(button, buttonType) }
        break;
      case KEY_TYPE.SHIFT:
        if (!repeat) { this.pressButton(button), this.handleButton(button, buttonType) }
        break;
      default:
        !repeat && this.pressButton(button);
        this.handleButton(button, buttonType);
        break;
    }
    !repeat && event.altKey && event.ctrlKey && this.toggleLanguage();
  }

  buttonIsPressed(button) {
    return button.classList.contains(buttonCssClasses.PRESSED_BUTTON);
  }

  handleButton(button, buttonType) {
    const handler = this.getButtonHandler(buttonType);
    handler && handler(button);
    console.log('handler');
  }

  pressButton(button) {
    button.classList.add(buttonCssClasses.PRESSED_BUTTON);
  }

  togglePress(button) {
    button.classList.toggle(buttonCssClasses.PRESSED_BUTTON);
  }

  mouseUpEventHandler(event) {
    const target = this.getTargetElement(event);
    if (this.isButton(target))
      this.unpressButtonHandler(target);
  }

  unpressButtonHandler(button) {
    const buttonType = this.getButtonType(button);
    if (buttonType === KEY_TYPE.CAPSLOCK)
      return;

    if (buttonType === KEY_TYPE.SHIFT) {
      this.handleButton(button, buttonType);
    }

    this.unpressButton(button);
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

  getButtonHandler(buttonType) {
    return this._eventHandlers[buttonType];
  }

  getButtonHandlers() {
    const eventHandlers = {
      [KEY_TYPE.KEY]: this.keyButtonHandler.bind(this),
      [KEY_TYPE.BACKSPACE]: this.backspaceButtonHandler.bind(this),
      [KEY_TYPE.CAPSLOCK]: this.capsLockButtonHandler.bind(this),
      [KEY_TYPE.ENTER]: this.enterButtonHandler.bind(this),
      [KEY_TYPE.SPACE]: this.spaceButtonHandler.bind(this),
      [KEY_TYPE.TAB]: this.tabButtonHandler.bind(this),
      [KEY_TYPE.SHIFT]: this.shiftButtonHandler.bind(this),
      [KEY_TYPE.DELETE]: this.deleteButtonHandler.bind(this)
    }
    eventHandlers[KEY_TYPE.ARROW] = eventHandlers[KEY_TYPE.KEY];
    return eventHandlers;
  }

  keyButtonHandler(button) {
    const printedElement = button.querySelector(`.${this.state.case}`);
    this._textEditor.print(printedElement.textContent);
  }

  backspaceButtonHandler(button) {
    this._textEditor.removeLeft();
  }

  deleteButtonHandler(button) {
    this._textEditor.removeRight();
  }

  spaceButtonHandler(button) {
    this._textEditor.print(' ');
  }

  capsLockButtonHandler(button) {
    this.toggleCase();
    this.toggleButtonsCharacterCase();
  }

  shiftButtonHandler(button) {
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

  toggleCase() {
    const currentCase = this.state.case;
    const newCase = currentCase === KEY_CASE.UP ? KEY_CASE.DOWN : KEY_CASE.UP;
    this.state.case = newCase;
  }

  getButtonType(button) {
    return button.getAttribute('type');
  }

  toggleLanguage(){
    const newLanguage = this.getNextLanguage();
    this.state.language = newLanguage;
    this.saveLanguage();
    this.refresh(this.state.language);
  }

  getNextLanguage(){
    const currentLanguage = this.state.language;
    const indexCurrentLanguage = this.state.languages.indexOf(currentLanguage);
    let indexOfNextLanguage = indexCurrentLanguage + 1;
    if (indexOfNextLanguage >= this.state.languages.length)
      indexOfNextLanguage = 0;
    return this.state.languages[indexOfNextLanguage];
  }

  saveLanguage(){
    localStorage.setItem(LOCAL_STORE_LANGUAGE_ITEM, this.state.language);
  }
}