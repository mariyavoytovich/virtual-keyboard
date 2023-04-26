import {ItemElement} from '../Base/ItemElement';

const cssClasses = {
    TEXT_EDITOR: 'text-editor'
}

export class TextEditor extends ItemElement {

    createElement(){
        return this.createDomNode('textarea', cssClasses.TEXT_EDITOR);
    }
}