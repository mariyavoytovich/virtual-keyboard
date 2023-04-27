import { ItemElement } from '../Base/ItemElement';

const cssClasses = {
  TEXT_EDITOR: 'text-editor',
  TEXT_EDITOR_CONTAINER: 'text-editor__container'
}

export class TextEditor extends ItemElement {
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

  setTextAreaSelection(start, end){
    if(!end)
      end = start;
      
    this._textArea.setSelectionRange(start, end);
  }

  focus(){
    this._textArea.focus();
  }
}