import { Component } from "../Base/Component";

const cssClasses = {
    TEXT_EDITOR: 'text-editor'
}

export class TextEditor extends Component {

    createElement(){
        return this.createDomNode('textarea', cssClasses.TEXT_EDITOR);
    }
}