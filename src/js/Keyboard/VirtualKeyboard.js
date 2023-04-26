import { Component } from "../Base/Component";

const cssClasses = {
    VIRTUAL_KEYBOARD: 'virtual-keyboard'
}

export class VirtualKeyboard extends Component{
    createElement(){
        return this.createDomNode('div', cssClasses.VIRTUAL_KEYBOARD);
    }
}