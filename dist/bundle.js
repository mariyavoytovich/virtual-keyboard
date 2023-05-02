/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/App/App.js":
/*!***************************!*\
  !*** ./src/js/App/App.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _Base_SectionElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Base/SectionElement */ "./src/js/Base/SectionElement.js");
/* harmony import */ var _Editor_TextEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Editor/TextEditor */ "./src/js/Editor/TextEditor.js");
/* harmony import */ var _Keyboard_VirtualKeyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Keyboard/VirtualKeyboard */ "./src/js/Keyboard/VirtualKeyboard.js");
/* harmony import */ var _AppContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppContainer */ "./src/js/App/AppContainer.js");
/* harmony import */ var _AppFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AppFooter */ "./src/js/App/AppFooter.js");
/* harmony import */ var _AppHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AppHeader */ "./src/js/App/AppHeader.js");









class App {
    constructor(){
        this.initElements();
    }

    initElements(){
        const container = new _AppContainer__WEBPACK_IMPORTED_MODULE_3__.AppContainer();
        const appHeader = new _AppHeader__WEBPACK_IMPORTED_MODULE_5__.AppHeader();
        const textEditor = new _Editor_TextEditor__WEBPACK_IMPORTED_MODULE_1__.TextEditor();
        const virtualKeyboard = new _Keyboard_VirtualKeyboard__WEBPACK_IMPORTED_MODULE_2__.VirtualKeyboard(textEditor);

        const mainSection = new _Base_SectionElement__WEBPACK_IMPORTED_MODULE_0__.SectionElement(true);
        mainSection.addElements(textEditor, virtualKeyboard);

        const footer = new _AppFooter__WEBPACK_IMPORTED_MODULE_4__.AppFooter();

        container.addElements(appHeader, mainSection, footer);
        container.init();
        container.show();
    }
}

/***/ }),

/***/ "./src/js/App/AppContainer.js":
/*!************************************!*\
  !*** ./src/js/App/AppContainer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppContainer": () => (/* binding */ AppContainer)
/* harmony export */ });
/* harmony import */ var _Base_GroupElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Base/GroupElement */ "./src/js/Base/GroupElement.js");


class AppContainer extends _Base_GroupElement__WEBPACK_IMPORTED_MODULE_0__.GroupElement {

  show() {
    const body = document.querySelector('.body');
    super.show(body);
  }
}

/***/ }),

/***/ "./src/js/App/AppFooter.js":
/*!*********************************!*\
  !*** ./src/js/App/AppFooter.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppFooter": () => (/* binding */ AppFooter)
/* harmony export */ });
/* harmony import */ var _Base_FooterElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Base/FooterElement */ "./src/js/Base/FooterElement.js");
/* harmony import */ var _Base_PElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/PElement */ "./src/js/Base/PElement.js");



const cssClasses = {
  DESCRIPTION: 'description',
  LANGUAGE: 'language'

}
class AppFooter extends _Base_FooterElement__WEBPACK_IMPORTED_MODULE_0__.FooterElement {

  init() {
    const description = new _Base_PElement__WEBPACK_IMPORTED_MODULE_1__.PElement('Клавиатура создана в операционной системе Windows', [cssClasses.DESCRIPTION]);
    const language = new _Base_PElement__WEBPACK_IMPORTED_MODULE_1__.PElement('Для переключения языка комбинация: ctrl + alt', [cssClasses.LANGUAGE]);
    this._contentWrapper.addElements(description, language);
    super.init();
  }
}

/***/ }),

/***/ "./src/js/App/AppHeader.js":
/*!*********************************!*\
  !*** ./src/js/App/AppHeader.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppHeader": () => (/* binding */ AppHeader)
/* harmony export */ });
/* harmony import */ var _Base_HeaderElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Base/HeaderElement */ "./src/js/Base/HeaderElement.js");
/* harmony import */ var _Base_SectionElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base/SectionElement */ "./src/js/Base/SectionElement.js");



const cssClasses = {
  HEADER: 'header'
}

const HEADER_TEXT = 'RSS Виртуальная клавиатура';

class AppHeader extends _Base_SectionElement__WEBPACK_IMPORTED_MODULE_1__.SectionElement {

  init(){
    const header = new _Base_HeaderElement__WEBPACK_IMPORTED_MODULE_0__.HeaderElement(1, HEADER_TEXT);
    this._contentWrapper.addElement(header);
  }

  createElement() {
    return this.createDomNode('header', cssClasses.HEADER);
  }
}

/***/ }),

/***/ "./src/js/Base/ContentWrapper.js":
/*!***************************************!*\
  !*** ./src/js/Base/ContentWrapper.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentWrapper": () => (/* binding */ ContentWrapper)
/* harmony export */ });
/* harmony import */ var _GroupElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupElement */ "./src/js/Base/GroupElement.js");


const cssClasses = {
  WRAPPER: "wrapper"
}

class ContentWrapper extends _GroupElement__WEBPACK_IMPORTED_MODULE_0__.GroupElement {

  createElement() {
    return this.createDomNode('div', cssClasses.WRAPPER);
  }
}

/***/ }),

/***/ "./src/js/Base/FooterElement.js":
/*!**************************************!*\
  !*** ./src/js/Base/FooterElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterElement": () => (/* binding */ FooterElement)
/* harmony export */ });
/* harmony import */ var _SectionElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionElement */ "./src/js/Base/SectionElement.js");


const cssClasses = {
  FOOTER: 'footer'
}

class FooterElement extends _SectionElement__WEBPACK_IMPORTED_MODULE_0__.SectionElement {
  createElement() {
    return this.createDomNode('footer', cssClasses.FOOTER);
  }
}

/***/ }),

/***/ "./src/js/Base/GroupElement.js":
/*!*************************************!*\
  !*** ./src/js/Base/GroupElement.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupElement": () => (/* binding */ GroupElement)
/* harmony export */ });
/* harmony import */ var _UIElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIElement */ "./src/js/Base/UIElement.js");


class GroupElement extends _UIElement__WEBPACK_IMPORTED_MODULE_0__.UIElement {
  _elements = [];

  show(container, props) {
    const groupContainer = this.createElement(props) ?? container;
    for (let element of this._elements) {
      element.show(groupContainer, props);
    }
    groupContainer !== container && container.append(groupContainer);
  }

  addElements(...elements) {
    this._elements.push(...elements);
  }

  addElement(element){
    this._elements.push(element);
  }

  init() {
    this._elements.forEach(element => element.init());
  }

  refresh(props) {
    this._elements.forEach(element => element.refresh(props));
  }
}

/***/ }),

/***/ "./src/js/Base/HeaderElement.js":
/*!**************************************!*\
  !*** ./src/js/Base/HeaderElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderElement": () => (/* binding */ HeaderElement)
/* harmony export */ });
/* harmony import */ var _ItemElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemElement */ "./src/js/Base/ItemElement.js");


const cssClasses ={
  HEADING: 'heading'
}

class HeaderElement extends _ItemElement__WEBPACK_IMPORTED_MODULE_0__.ItemElement {
  constructor(level, text) {
    super();
    this._level = level;
    this._tetxt = text;
  }

  createElement() {
    const header = this.createDomNode(`h${this._level}`, cssClasses.HEADING);
    header.textContent = this._tetxt;
    return header;
  }
}

/***/ }),

/***/ "./src/js/Base/ItemElement.js":
/*!************************************!*\
  !*** ./src/js/Base/ItemElement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemElement": () => (/* binding */ ItemElement)
/* harmony export */ });
/* harmony import */ var _UIElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIElement */ "./src/js/Base/UIElement.js");


class ItemElement extends _UIElement__WEBPACK_IMPORTED_MODULE_0__.UIElement {

  show(container, props) {
    const element = this.createElement(props);
    container.append(element);
  }
}

/***/ }),

/***/ "./src/js/Base/PElement.js":
/*!*********************************!*\
  !*** ./src/js/Base/PElement.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PElement": () => (/* binding */ PElement)
/* harmony export */ });
/* harmony import */ var _ItemElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemElement */ "./src/js/Base/ItemElement.js");


class PElement extends _ItemElement__WEBPACK_IMPORTED_MODULE_0__.ItemElement {

  constructor(text, cssClasses) {
    super();
    this._text = text;
    this._cssClasses = cssClasses;
  }

  createElement() {
    const p = this.createDomNode('p', ...this._cssClasses);
    p.textContent = this._text;
    return p;
  }
}

/***/ }),

/***/ "./src/js/Base/SectionElement.js":
/*!***************************************!*\
  !*** ./src/js/Base/SectionElement.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionElement": () => (/* binding */ SectionElement)
/* harmony export */ });
/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentWrapper */ "./src/js/Base/ContentWrapper.js");
/* harmony import */ var _UIElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UIElement */ "./src/js/Base/UIElement.js");



class SectionElement extends _UIElement__WEBPACK_IMPORTED_MODULE_1__.UIElement {
  _contentWrapper = new _ContentWrapper__WEBPACK_IMPORTED_MODULE_0__.ContentWrapper();

  constructor(){
    super();
  }

  show(container, props){
    const section = this.createElement();
    this._contentWrapper.show(section, props);
    container.append(section);
  }

  createElement() {
    return this.createDomNode('section');
  }

  addElements(...elements) {
    this._contentWrapper.addElements(...elements);
  }

  init(){
    this._contentWrapper.init();
  }
}

/***/ }),

/***/ "./src/js/Base/UIElement.js":
/*!**********************************!*\
  !*** ./src/js/Base/UIElement.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIElement": () => (/* binding */ UIElement)
/* harmony export */ });
class UIElement {
  createElement() { }

  createDomNode(element, ...classes) {
    const node = document.createElement(element);
    node.classList.add(...classes);
    return node
  }

  init() {}
}

/***/ }),

/***/ "./src/js/Editor/TextEditor.js":
/*!*************************************!*\
  !*** ./src/js/Editor/TextEditor.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextEditor": () => (/* binding */ TextEditor)
/* harmony export */ });
/* harmony import */ var _Base_ItemElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Base/ItemElement */ "./src/js/Base/ItemElement.js");


const cssClasses = {
  TEXT_EDITOR: 'text-editor',
  TEXT_EDITOR_CONTAINER: 'text-editor__container'
}

class TextEditor extends _Base_ItemElement__WEBPACK_IMPORTED_MODULE_0__.ItemElement {
  _textArea;

  createElement() {
    const container = this.createDomNode('div', cssClasses.TEXT_EDITOR_CONTAINER);
    const editor = this.createDomNode('textarea', cssClasses.TEXT_EDITOR);
    editor.setAttribute('rows', 5);
    container.append(editor);

    this._textArea = editor;
    return container;
  }

  print(value) {
    const selectionStart = this._textArea.selectionStart;
    const oldValue = this._textArea.value;

    const newValue = oldValue.length === selectionStart
      ? this.appendValue(oldValue, value)
      : this.insertValue(oldValue, value, selectionStart);

    this._textArea.value = newValue;

    const newSelectionStart = selectionStart + value.length;
    this.setTextAreaSelection(newSelectionStart);

    this.focus();
  }

  appendValue(oldvalue, value) {
    return `${oldvalue}${value}`;
  }

  insertValue(oldValue, value, index) {
    const prefix = oldValue.substring(0, index);
    const suffix = oldValue.substring(index);
    return `${prefix}${value}${suffix}`;
  }

  setTextAreaSelection(start, end) {
    if (!end)
      end = start;

    this._textArea.setSelectionRange(start, end);
  }

  focus() {
    this._textArea.focus();
  }

  removeLeft() {
    const selectionStart = this._textArea.selectionStart;
    if (selectionStart === 0)
      return;
    const removedCharIndex = selectionStart - 1;
    this.removeAt(removedCharIndex);
  }

  removeAt(removeIndex){
    this.removeChar(removeIndex);
    this.setTextAreaSelection(removeIndex);
    this.focus();
  }

  removeChar(index) {
    const oldValue = this._textArea.value;
    const prefix = oldValue.substring(0, index);
    const suffix = oldValue.substring(index + 1);
    this._textArea.value = `${prefix}${suffix}`;
  }

  removeRight() {
    const selectionStart = this._textArea.selectionStart;
    if (selectionStart === this._textArea.value.length)
      return;
    const removedCharIndex = selectionStart;
    this.removeAt(removedCharIndex);
  }
}

/***/ }),

/***/ "./src/js/Keyboard/Button.js":
/*!***********************************!*\
  !*** ./src/js/Keyboard/Button.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "cssClasses": () => (/* binding */ cssClasses)
/* harmony export */ });
/* harmony import */ var _Base_ItemElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Base/ItemElement */ "./src/js/Base/ItemElement.js");
/* harmony import */ var _constants_KeyCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/KeyCase */ "./src/js/Keyboard/constants/KeyCase.js");
/* harmony import */ var _constants_Language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/Language */ "./src/js/Keyboard/constants/Language.js");




const cssClasses = {
  KEYBOARD_BUTTON: 'keyboard-button',
  BUTTON: 'button',
  PRESSED_BUTTON: 'pressed'
}

class Button extends _Base_ItemElement__WEBPACK_IMPORTED_MODULE_0__.ItemElement {

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

    const { key, shiftKey } = (0,_constants_Language__WEBPACK_IMPORTED_MODULE_2__.getButtonKeyValuesByLanguage)(this._code, language);

    this._keyDown = this.createKeyElement(key, _constants_KeyCase__WEBPACK_IMPORTED_MODULE_1__.KEY_CASE.DOWN);
    this._keyUp = this.createKeyElement(shiftKey, _constants_KeyCase__WEBPACK_IMPORTED_MODULE_1__.KEY_CASE.UP);

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
    const { key, shiftKey } = (0,_constants_Language__WEBPACK_IMPORTED_MODULE_2__.getButtonKeyValuesByLanguage)(this._code, language);

    this._keyDown.textContent = key;
    this._keyUp.textContent = shiftKey;
  }
}

/***/ }),

/***/ "./src/js/Keyboard/KeyboardRow.js":
/*!****************************************!*\
  !*** ./src/js/Keyboard/KeyboardRow.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyboardRow": () => (/* binding */ KeyboardRow)
/* harmony export */ });
/* harmony import */ var _Base_GroupElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Base/GroupElement */ "./src/js/Base/GroupElement.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/js/Keyboard/Button.js");
/* harmony import */ var _constants_KeyboardButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/KeyboardButtons */ "./src/js/Keyboard/constants/KeyboardButtons.js");




const cssClasses = {
  KEYBOARD_ROW: 'keyboard-row',
  ROW: 'row'
}

class KeyboardRow extends _Base_GroupElement__WEBPACK_IMPORTED_MODULE_0__.GroupElement {
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
     const { location, keyType } = _constants_KeyboardButtons__WEBPACK_IMPORTED_MODULE_2__.KEYBOARD_BUTTONS[buttonCode];
     const button = new _Button__WEBPACK_IMPORTED_MODULE_1__.Button(buttonCode, location, keyType);
     this.addElement(button);
    });
  }

  createElement() {
    return this.createDomNode('div', cssClasses.KEYBOARD_ROW, cssClasses.ROW);
  }
}

/***/ }),

/***/ "./src/js/Keyboard/VirtualKeyboard.js":
/*!********************************************!*\
  !*** ./src/js/Keyboard/VirtualKeyboard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VirtualKeyboard": () => (/* binding */ VirtualKeyboard)
/* harmony export */ });
/* harmony import */ var _Base_GroupElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Base/GroupElement */ "./src/js/Base/GroupElement.js");
/* harmony import */ var _KeyboardRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyboardRow */ "./src/js/Keyboard/KeyboardRow.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./src/js/Keyboard/Button.js");
/* harmony import */ var _constants_KeyType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/KeyType */ "./src/js/Keyboard/constants/KeyType.js");
/* harmony import */ var _constants_KeyCase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/KeyCase */ "./src/js/Keyboard/constants/KeyCase.js");
/* harmony import */ var _constants_KeyboardSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/KeyboardSettings */ "./src/js/Keyboard/constants/KeyboardSettings.js");
/* harmony import */ var _constants_KeyboardRows__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/KeyboardRows */ "./src/js/Keyboard/constants/KeyboardRows.js");








const cssClasses = {
  VIRTUAL_KEYBOARD: 'virtual-keyboard',
  HIDDEN: 'hidden'
}

const LOCAL_STORE_LANGUAGE_ITEM = 'lang';

class VirtualKeyboard extends _Base_GroupElement__WEBPACK_IMPORTED_MODULE_0__.GroupElement {
  _eventHandlers;
  _keyboard;

  constructor(textEditor) {
    super();
    this._textEditor = textEditor;
    this.state = {
      case: _constants_KeyboardSettings__WEBPACK_IMPORTED_MODULE_5__.KEYBOARD_SETTINGS.defaultKeyCase,
      language: _constants_KeyboardSettings__WEBPACK_IMPORTED_MODULE_5__.KEYBOARD_SETTINGS.defaultLanguage,
      languages: _constants_KeyboardSettings__WEBPACK_IMPORTED_MODULE_5__.KEYBOARD_SETTINGS.languages,
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
    for (let { id, buttons } of _constants_KeyboardRows__WEBPACK_IMPORTED_MODULE_6__.KEYBOARD_ROWS) {
      const keyboardRow = new _KeyboardRow__WEBPACK_IMPORTED_MODULE_1__.KeyboardRow(id, buttons);
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
      case _constants_KeyType__WEBPACK_IMPORTED_MODULE_3__.KEY_TYPE.CAPSLOCK:
        if (!repeat) { this.togglePress(button), this.handleButton(button, buttonType) }
        break;
      case _constants_KeyType__WEBPACK_IMPORTED_MODULE_3__.KEY_TYPE.SHIFT:
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
    return button.classList.contains(_Button__WEBPACK_IMPORTED_MODULE_2__.cssClasses.PRESSED_BUTTON);
  }

  handleButton(button, buttonType) {
    const handler = this.getButtonHandler(buttonType);
    handler && handler(button);
  }

  pressButton(button) {
    button.classList.add(_Button__WEBPACK_IMPORTED_MODULE_2__.cssClasses.PRESSED_BUTTON);
  }

  togglePress(button) {
    button.classList.toggle(_Button__WEBPACK_IMPORTED_MODULE_2__.cssClasses.PRESSED_BUTTON);
  }

  mouseUpEventHandler(event) {
    const target = this.getTargetElement(event);
    if (this.isButton(target))
      this.unpressButtonHandler(target);
  }

  unpressButtonHandler(button) {
    const buttonType = this.getButtonType(button);
    if (buttonType === _constants_KeyType__WEBPACK_IMPORTED_MODULE_3__.KEY_TYPE.CAPSLOCK)
      return;

    if (buttonType === _constants_KeyType__WEBPACK_IMPORTED_MODULE_3__.KEY_TYPE.SHIFT) {
      this.handleButton(button, buttonType);
    }

    this.unpressButton(button);
  }

  unpressButton(button) {
    button.classList.remove(_Button__WEBPACK_IMPORTED_MODULE_2__.cssClasses.PRESSED_BUTTON);
  }

  getTargetElement(event) {
    const target = event.target;
    return target.tagName === 'SPAN' ? target.closest('div') : target;
  }

  isButton(element) {
    return element.classList.contains(_Button__WEBPACK_IMPORTED_MODULE_2__.cssClasses.KEYBOARD_BUTTON);
  }

  getButtonHandler(buttonType) {
    return this._eventHandlers[buttonType];
  }

  getButtonHandlers() {
    const eventHandlers = {
      [_constants_KeyType__WEBPACK_IMPORTED_MODULE_3__.KEY_TYPE.KEY]: this.keyButtonHandler.bind(this),
      [_constants_KeyType__WEBPACK_IMPORTED_MODULE_3__.KEY_TYPE.BACKSPACE]: this.backspaceButtonHandler.bind(this),
      [_constants_KeyType__WEBPACK_IMPORTED_MODULE_3__.KEY_TYPE.CAPSLOCK]: this.capsLockButtonHandler.bind(this),
      [_constants_KeyType__WEBPACK_IMPORTED_MODULE_3__.KEY_TYPE.ENTER]: this.enterButtonHandler.bind(this),
      [_constants_KeyType__WEBPACK_IMPORTED_MODULE_3__.KEY_TYPE.SPACE]: this.spaceButtonHandler.bind(this),
      [_constants_KeyType__WEBPACK_IMPORTED_MODULE_3__.KEY_TYPE.TAB]: this.tabButtonHandler.bind(this),
      [_constants_KeyType__WEBPACK_IMPORTED_MODULE_3__.KEY_TYPE.SHIFT]: this.shiftButtonHandler.bind(this),
      [_constants_KeyType__WEBPACK_IMPORTED_MODULE_3__.KEY_TYPE.DELETE]: this.deleteButtonHandler.bind(this)
    }
    eventHandlers[_constants_KeyType__WEBPACK_IMPORTED_MODULE_3__.KEY_TYPE.ARROW] = eventHandlers[_constants_KeyType__WEBPACK_IMPORTED_MODULE_3__.KEY_TYPE.KEY];
    return eventHandlers;
  }

  keyButtonHandler(button) {
    const printedElement = button.querySelector(`.${this.state.case}`);
    this._textEditor.print(printedElement.textContent);
  }

  backspaceButtonHandler() {
    this._textEditor.removeLeft();
  }

  deleteButtonHandler() {
    this._textEditor.removeRight();
  }

  spaceButtonHandler() {
    this._textEditor.print(' ');
  }

  capsLockButtonHandler() {
    this.toggleCase();
    this.toggleButtonsCharacterCase();
  }

  shiftButtonHandler() {
    this.toggleCase();
    this.toggleButtonsCharacterCase();
  }

  enterButtonHandler() {
    this._textEditor.print('\n');
  }

  tabButtonHandler() {
    this._textEditor.print('    ');
  }

  toggleButtonsCharacterCase() {
    const spans = this._keyboard.querySelectorAll(`.${_Button__WEBPACK_IMPORTED_MODULE_2__.cssClasses.KEYBOARD_BUTTON} span`);
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
    const newCase = currentCase === _constants_KeyCase__WEBPACK_IMPORTED_MODULE_4__.KEY_CASE.UP ? _constants_KeyCase__WEBPACK_IMPORTED_MODULE_4__.KEY_CASE.DOWN : _constants_KeyCase__WEBPACK_IMPORTED_MODULE_4__.KEY_CASE.UP;
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

/***/ }),

/***/ "./src/js/Keyboard/constants/KeyCase.js":
/*!**********************************************!*\
  !*** ./src/js/Keyboard/constants/KeyCase.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEY_CASE": () => (/* binding */ KEY_CASE)
/* harmony export */ });
const KEY_CASE = {
  UP: 'case-up',
  DOWN: 'case-down'
}

/***/ }),

/***/ "./src/js/Keyboard/constants/KeyType.js":
/*!**********************************************!*\
  !*** ./src/js/Keyboard/constants/KeyType.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEY_TYPE": () => (/* binding */ KEY_TYPE)
/* harmony export */ });
const KEY_TYPE = {
  KEY: 'key',
  BACKSPACE: 'backspace',
  TAB: 'tab',
  CAPSLOCK: 'caps-lock',
  ENTER: 'enter',
  SHIFT: 'shift',
  ARROW: 'arrow',
  CONTROL: 'control',
  SPACE: 'space',
  ALT: 'alt',
  META: 'meta',
  DELETE: 'delete'
}

/***/ }),

/***/ "./src/js/Keyboard/constants/KeyboardButtons.js":
/*!******************************************************!*\
  !*** ./src/js/Keyboard/constants/KeyboardButtons.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEYBOARD_BUTTONS": () => (/* binding */ KEYBOARD_BUTTONS)
/* harmony export */ });
/* harmony import */ var _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyboardButtonsCodes */ "./src/js/Keyboard/constants/KeyboardButtonsCodes.js");
/* harmony import */ var _KeyType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyType */ "./src/js/Keyboard/constants/KeyType.js");



const locations = {
  GENERAL: 'general-keys',
  LEFT_SIDE_MODIFIER_KEYS: 'left-side-modifier-keys',
  RIGHT_SIDE_MODIFIER_KEYS: 'right-side-modifier-keys'
}

const KEYBOARD_BUTTONS =
  {
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.BACKQUOTE]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_1]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_2]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_3]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_4]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_5]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_6]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_7]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_8]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_9]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_0]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.MINUS]: { location: locations.GENERAL,  keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.EQUAL]: {location: locations.GENERAL,keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.BACKSPACE]: {location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.BACKSPACE },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.TAB]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.TAB },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_Q]: {location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_W]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_E]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_R]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_T]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_Y]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_U]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_I]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_O]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_P]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.BRACKET_LEFT]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.BRACKET_RIGHT]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.BACKSLASH]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.CAPSLOCK]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.CAPSLOCK },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_A]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_S]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_D]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_F]: { location: locations.GENERAL,keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_G]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_H]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_J]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_K]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_L]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.SEMICOLON]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.QUOTE]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ENTER]: { location: locations.LEFT_SIDE_MODIFIER_KEYS, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.ENTER },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.SHIFT_LEFT]: { location: locations.LEFT_SIDE_MODIFIER_KEYS, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.SHIFT },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_Z]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_X]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_C]: { location: locations.GENERAL,keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY},
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_V]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_B]: { location: locations.GENERAL,
      keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY
    },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_N]: { location: locations.GENERAL,
      keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY
    },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_M]: { location: locations.GENERAL,
      keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY
    },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.COMMA]: { location: locations.GENERAL,
      keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY
    },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.PERIOD]: { location: locations.GENERAL,
      keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY
    },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.SLASH]: { location: locations.GENERAL,
      keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.KEY
    },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ARROW_UP]: { location: locations.GENERAL,
      keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.ARROW
    },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.SHIFT_RIGHT]: { location: locations.RIGHT_SIDE_MODIFIER_KEYS,
      keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.SHIFT
    },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.CONTROL_LEFT]: { location: locations.LEFT_SIDE_MODIFIER_KEYS,
      keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.CONTROL
    },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.META]: { location: locations.LEFT_SIDE_MODIFIER_KEYS,
      keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.META
    },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ALT_LEFT]: { location: locations.LEFT_SIDE_MODIFIER_KEYS,
      keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.ALT
    },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.SPACE]: { location: locations.GENERAL,
      keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.SPACE
    },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ALT_RIGHT]: { location: locations.RIGHT_SIDE_MODIFIER_KEYS,
      keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.ALT
    },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.CONTROL_RIGHT]: { location: locations.RIGHT_SIDE_MODIFIER_KEYS,
      keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.CONTROL
    },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ARROW_LEFT]: { location: locations.GENERAL,
      keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.ARROW
    },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ARROW_DOWN]: { location: locations.GENERAL,
      keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.ARROW
    },
    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ARROW_RIGHT]: { location: locations.GENERAL,
      keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.ARROW
    },

    [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DELETE]: { location: locations.GENERAL, keyType: _KeyType__WEBPACK_IMPORTED_MODULE_1__.KEY_TYPE.DELETE}
  }


/***/ }),

/***/ "./src/js/Keyboard/constants/KeyboardButtonsCodes.js":
/*!***********************************************************!*\
  !*** ./src/js/Keyboard/constants/KeyboardButtonsCodes.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEYBOARD_BUTTONS_CODES": () => (/* binding */ KEYBOARD_BUTTONS_CODES)
/* harmony export */ });
const KEYBOARD_BUTTONS_CODES = {
    BACKQUOTE : 'Backquote',
    DIGIT_1: 'Digit1',
    DIGIT_2: 'Digit2',
    DIGIT_3: 'Digit3',
    DIGIT_4: 'Digit4',
    DIGIT_5: 'Digit5',
    DIGIT_6: 'Digit6',
    DIGIT_7: 'Digit7',
    DIGIT_8: 'Digit8',
    DIGIT_9: 'Digit9',
    DIGIT_0: 'Digit0',
    MINUS: 'Minus',
    EQUAL: 'Equal',
    BACKSPACE: 'Backspace',
    TAB: 'Tab',
    KEY_Q: 'KeyQ',
    KEY_W: 'KeyW',
    KEY_E: 'KeyE',
    KEY_R: 'KeyR',
    KEY_T: 'KeyT',
    KEY_Y: 'KeyY',
    KEY_U: 'KeyU',
    KEY_I: 'KeyI',
    KEY_O: 'KeyO',
    KEY_P: 'KeyP',
    BRACKET_LEFT: 'BracketLeft',
    BRACKET_RIGHT: 'BracketRight',
    BACKSLASH: 'Backslash',
    CAPSLOCK: 'CapsLock',
    KEY_A: 'KeyA',
    KEY_S: 'KeyS',
    KEY_D: 'KeyD',
    KEY_F: 'KeyF',
    KEY_G: 'KeyG',
    KEY_H: 'KeyH',
    KEY_J: 'KeyJ',
    KEY_K: 'KeyK',
    KEY_L: 'KeyL',
    SEMICOLON: 'Semicolon',
    QUOTE: 'Quote',
    ENTER: 'Enter',
    SHIFT_LEFT: 'ShiftLeft',
    KEY_Z: 'KeyZ',
    KEY_X: 'KeyX',
    KEY_C: 'KeyC',
    KEY_V: 'KeyV',
    KEY_B: 'KeyB',
    KEY_N: 'KeyN',
    KEY_M: 'KeyM',
    COMMA: 'Comma',
    PERIOD: 'Period',
    SLASH: 'Slash',
    ARROW_UP: 'ArrowUp',
    SHIFT_RIGHT: 'ShiftRight',
    CONTROL_LEFT: 'ControlLeft',
    META: 'MetaLeft',
    ALT_LEFT: 'AltLeft',
    SPACE: 'Space',
    ALT_RIGHT: 'AltRight',
    CONTROL_RIGHT: 'ControlRight',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_DOWN: 'ArrowDown',
    ARROW_RIGHT:'ArrowRight',
    DELETE: 'Delete'
}

/***/ }),

/***/ "./src/js/Keyboard/constants/KeyboardRows.js":
/*!***************************************************!*\
  !*** ./src/js/Keyboard/constants/KeyboardRows.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEYBOARD_ROWS": () => (/* binding */ KEYBOARD_ROWS)
/* harmony export */ });
/* harmony import */ var _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyboardButtonsCodes */ "./src/js/Keyboard/constants/KeyboardButtonsCodes.js");


const KEYBOARD_ROWS = [
  {
    id: 0,
    buttons: [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.BACKQUOTE, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_1, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_2,
    _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_3, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_4, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_5, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_6,
    _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_7, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_8, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_9, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_0,
    _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.MINUS, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.EQUAL, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.BACKSPACE]
  },
  {
    id: 1,
    buttons: [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.TAB, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_Q, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_W,
    _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_E, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_R, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_T,
    _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_Y, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_U, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_I,
    _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_O, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_P, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.BRACKET_LEFT,
    _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.BRACKET_RIGHT, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.BACKSLASH, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DELETE]
  },
  {
    id: 2,
    buttons: [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.CAPSLOCK, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_A, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_S,
    _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_D, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_F, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_G,
    _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_H, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_J, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_K,
    _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_L, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.SEMICOLON, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.QUOTE,
    _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ENTER]
  },
  {
    id: 3,
    buttons: [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.SHIFT_LEFT, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_Z, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_X,
    _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_C, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_V, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_B, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_N,
    _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_M, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.COMMA, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.PERIOD,
    _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.SLASH, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ARROW_UP, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.SHIFT_RIGHT]
  },
  {
    id: 4,
    buttons: [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.CONTROL_LEFT, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.META, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ALT_LEFT,
    _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.SPACE, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ALT_RIGHT, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.CONTROL_RIGHT,
    _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ARROW_LEFT, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ARROW_DOWN, _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ARROW_RIGHT]
  }
]

/***/ }),

/***/ "./src/js/Keyboard/constants/KeyboardSettings.js":
/*!*******************************************************!*\
  !*** ./src/js/Keyboard/constants/KeyboardSettings.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEYBOARD_SETTINGS": () => (/* binding */ KEYBOARD_SETTINGS)
/* harmony export */ });
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Language */ "./src/js/Keyboard/constants/Language.js");
/* harmony import */ var _KeyCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyCase */ "./src/js/Keyboard/constants/KeyCase.js");



const KEYBOARD_SETTINGS = {
  languages: [_Language__WEBPACK_IMPORTED_MODULE_0__.LANGUAGE.ENG, _Language__WEBPACK_IMPORTED_MODULE_0__.LANGUAGE.RU],
  defaultLanguage: _Language__WEBPACK_IMPORTED_MODULE_0__.LANGUAGE.ENG,
  defaultKeyCase: _KeyCase__WEBPACK_IMPORTED_MODULE_1__.KEY_CASE.DOWN,
}

/***/ }),

/***/ "./src/js/Keyboard/constants/Language.js":
/*!***********************************************!*\
  !*** ./src/js/Keyboard/constants/Language.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LANGUAGE": () => (/* binding */ LANGUAGE),
/* harmony export */   "getButtonKeyValuesByLanguage": () => (/* binding */ getButtonKeyValuesByLanguage)
/* harmony export */ });
/* harmony import */ var _languages_eng__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languages/eng */ "./src/js/Keyboard/constants/languages/eng.js");
/* harmony import */ var _languages_ru__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languages/ru */ "./src/js/Keyboard/constants/languages/ru.js");



const LANGUAGE = {
  RU: 'ru',
  ENG: 'eng'
}

const KEYBOARD_LANGUAGES ={
  [LANGUAGE.RU]: _languages_ru__WEBPACK_IMPORTED_MODULE_1__.RU,
  [LANGUAGE.ENG]: _languages_eng__WEBPACK_IMPORTED_MODULE_0__.ENG
}
const getButtonKeyValuesByLanguage = (buttonCode, language) =>{
  return KEYBOARD_LANGUAGES[language][buttonCode];
}

/***/ }),

/***/ "./src/js/Keyboard/constants/languages/eng.js":
/*!****************************************************!*\
  !*** ./src/js/Keyboard/constants/languages/eng.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENG": () => (/* binding */ ENG)
/* harmony export */ });
/* harmony import */ var _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../KeyboardButtonsCodes */ "./src/js/Keyboard/constants/KeyboardButtonsCodes.js");


const ENG = {
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.BACKQUOTE]: { key: '`', shiftKey: '~' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_1]: { key: '1', shiftKey: '!' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_2]: { key: '2', shiftKey: '@' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_3]: { key: '3', shiftKey: '#' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_4]: { key: '4', shiftKey: '$' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_5]: { key: '5', shiftKey: '%' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_6]: { key: '6', shiftKey: '^' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_7]: { key: '7', shiftKey: '&' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_8]: { key: '8', shiftKey: '*' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_9]: { key: '9', shiftKey: '(' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_0]: { key: '0', shiftKey: ')' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.MINUS]: { key: '-', shiftKey: '_' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.EQUAL]: { key: '=', shiftKey: '+' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.BACKSPACE]: { key: 'Backspace', shiftKey: 'Backspace' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.TAB]: { key: 'Tab', shiftKey: 'Tab' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_Q]: { key: 'q', shiftKey: 'Q' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_W]: { key: 'w', shiftKey: 'W' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_E]: { key: 'e', shiftKey: 'E' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_R]: { key: 'r', shiftKey: 'R' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_T]: { key: 't', shiftKey: 'T' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_Y]: { key: 'y', shiftKey: 'Y' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_U]: { key: 'u', shiftKey: 'U' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_I]: { key: 'i', shiftKey: 'I' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_O]: { key: 'o', shiftKey: 'O' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_P]: { key: 'p', shiftKey: 'P' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.BRACKET_LEFT]: { key: '[', shiftKey: '{' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.BRACKET_RIGHT]: { key: ']', shiftKey: '}' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.BACKSLASH]: { key: '\\', shiftKey: '|' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.CAPSLOCK]: { key: 'Caps Lock', shiftKey: 'Caps Lock' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_A]: { key: 'a', shiftKey: 'A' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_S]: { key: 's', shiftKey: 'S' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_D]: { key: 'd', shiftKey: 'D' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_F]: { key: 'f', shiftKey: 'F' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_G]: { key: 'g', shiftKey: 'G' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_H]: { key: 'h', shiftKey: 'H' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_J]: { key: 'j', shiftKey: 'J' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_K]: { key: 'k', shiftKey: 'K' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_L]: { key: 'l', shiftKey: 'L' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.SEMICOLON]: { key: ';', shiftKey: ':' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.QUOTE]: { key: '\'', shiftKey: '"' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ENTER]: { key: 'Enter', shiftKey: 'Enter' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.SHIFT_LEFT]: { key: 'Shift', shiftKey: 'Shift' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_Z]: { key: 'z', shiftKey: 'Z' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_X]: { key: 'x', shiftKey: 'X' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_C]: { key: 'c', shiftKey: 'C' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_V]: { key: 'v', shiftKey: 'V' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_B]: { key: 'b', shiftKey: 'B' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_N]: { key: 'n', shiftKey: 'N' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_M]: { key: 'm', shiftKey: 'M' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.COMMA]: { key: ',', shiftKey: '<' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.PERIOD]: { key: '.', shiftKey: '>' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.SLASH]: { key: '/', shiftKey: '?' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ARROW_UP]: { key: '▲', shiftKey: '▲' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.SHIFT_RIGHT]: { key: 'Shift', shiftKey: 'Shift' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.CONTROL_LEFT]: { key: 'Ctrl', shiftKey: 'Ctrl' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.META]: { key: 'Win', shiftKey: 'Win' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ALT_LEFT]: { key: 'Alt', shiftKey: 'Alt' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ALT_RIGHT]: { key: 'Alt', shiftKey: 'Alt' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.SPACE]: { key: '', shiftKey: '' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.CONTROL_RIGHT]: { key: 'Ctrl', shiftKey: 'Ctrl' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ARROW_LEFT]: { key: '◄', shiftKey: '◄' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ARROW_DOWN]: { key: '▼', shiftKey: '▼' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ARROW_RIGHT]: { key: '►', shiftKey: '►' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DELETE]: {key: 'Del', shiftKey: 'Del'}
}

/***/ }),

/***/ "./src/js/Keyboard/constants/languages/ru.js":
/*!***************************************************!*\
  !*** ./src/js/Keyboard/constants/languages/ru.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RU": () => (/* binding */ RU)
/* harmony export */ });
/* harmony import */ var _KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../KeyboardButtonsCodes */ "./src/js/Keyboard/constants/KeyboardButtonsCodes.js");


const RU = {
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.BACKQUOTE]: { key: 'ё', shiftKey: 'Ё' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_1]: { key: '1', shiftKey: '!' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_2]: { key: '2', shiftKey: '"' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_3]: { key: '3', shiftKey: '№' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_4]: { key: '4', shiftKey: ';' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_5]: { key: '5', shiftKey: '%' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_6]: { key: '6', shiftKey: ':' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_7]: { key: '7', shiftKey: '?' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_8]: { key: '8', shiftKey: '*' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_9]: { key: '9', shiftKey: '(' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DIGIT_0]: { key: '0', shiftKey: ')' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.MINUS]: { key: '-', shiftKey: '_' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.EQUAL]: { key: '=', shiftKey: '+' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.BACKSPACE]: { key: 'Backspace', shiftKey: 'Backspace' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.TAB]: { key: 'Tab', shiftKey: 'Tab' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_Q]: { key: 'й', shiftKey: 'Й' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_W]: { key: 'ц', shiftKey: 'Ц' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_E]: { key: 'у', shiftKey: 'У' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_R]: { key: 'к', shiftKey: 'К' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_T]: { key: 'е', shiftKey: 'Е' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_Y]: { key: 'н', shiftKey: 'Н' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_U]: { key: 'г', shiftKey: 'Г' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_I]: { key: 'ш', shiftKey: 'Ш' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_O]: { key: 'щ', shiftKey: 'Щ' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_P]: { key: 'з', shiftKey: 'З' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.BRACKET_LEFT]: { key: 'х', shiftKey: 'Х' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.BRACKET_RIGHT]: { key: 'ъ', shiftKey: 'Ъ' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.BACKSLASH]: { key: '\\', shiftKey: '/' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.CAPSLOCK]: { key: 'Caps Lock', shiftKey: 'Caps Lock' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_A]: { key: 'ф', shiftKey: 'Ф' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_S]: { key: 'ы', shiftKey: 'Ы' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_D]: { key: 'в', shiftKey: 'В' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_F]: { key: 'а', shiftKey: 'А' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_G]: { key: 'п', shiftKey: 'П' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_H]: { key: 'р', shiftKey: 'Р' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_J]: { key: 'о', shiftKey: 'О' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_K]: { key: 'л', shiftKey: 'Л' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_L]: { key: 'д', shiftKey: 'Д' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.SEMICOLON]: { key: 'ж', shiftKey: 'Ж' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.QUOTE]: { key: 'э', shiftKey: 'Э' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ENTER]: { key: 'Enter', shiftKey: 'Enter' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.SHIFT_LEFT]: { key: 'Shift', shiftKey: 'Shift' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_Z]: { key: 'я', shiftKey: 'Я' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_X]: { key: 'ч', shiftKey: 'Ч' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_C]: { key: 'с', shiftKey: 'С' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_V]: { key: 'м', shiftKey: 'М' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_B]: { key: 'и', shiftKey: 'И' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_N]: { key: 'т', shiftKey: 'Т' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.KEY_M]: { key: 'ь', shiftKey: 'Ь' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.COMMA]: { key: 'б', shiftKey: 'Б' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.PERIOD]: { key: 'ю', shiftKey: 'Ю' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.SLASH]: { key: '.', shiftKey: ',' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ARROW_UP]: { key: '▲', shiftKey: '▲' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.SHIFT_RIGHT]: { key: 'Shift', shiftKey: 'Shift' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.CONTROL_LEFT]: { key: 'Ctrl', shiftKey: 'Ctrl' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.META]: { key: 'Win', shiftKey: 'Win' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ALT_LEFT]: { key: 'Alt', shiftKey: 'Alt' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ALT_RIGHT]: { key: 'Alt', shiftKey: 'Alt' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.SPACE]: { key: '', shiftKey: '' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.CONTROL_RIGHT]: { key: 'Ctrl', shiftKey: 'Ctrl' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ARROW_LEFT]: { key: '◄', shiftKey: '◄' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ARROW_DOWN]: { key: '▼', shiftKey: '▼' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.ARROW_RIGHT]: { key: '►', shiftKey: '►' },
  [_KeyboardButtonsCodes__WEBPACK_IMPORTED_MODULE_0__.KEYBOARD_BUTTONS_CODES.DELETE]: {key: 'Del', shiftKey: 'Del'}
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/App */ "./src/js/App/App.js");


new _App_App__WEBPACK_IMPORTED_MODULE_0__.App();
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map