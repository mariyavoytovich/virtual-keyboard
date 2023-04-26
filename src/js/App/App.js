import { UIElement } from "../Base/UIElement";
import { TextEditor } from "../Editor/TextEditor";
import { VirtualKeyboard } from "../Keyboard/VirtualKeyboard";
import { AppContainer } from "./AppContainer";



export class App {
    constructor(){
        this.initElements();
    }

    initElements(){
        const container = new AppContainer();
        const textEditor = new TextEditor();
        const virtualKeyboard = new VirtualKeyboard();

        container.addElements(textEditor, virtualKeyboard);
        container.init();
        container.show();
    }
}