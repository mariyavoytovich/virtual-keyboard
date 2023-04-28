import { SectionElement } from "../Base/SectionElement";
import { UIElement } from "../Base/UIElement";
import { TextEditor } from "../Editor/TextEditor";
import { VirtualKeyboard } from "../Keyboard/VirtualKeyboard";
import { AppContainer } from "./AppContainer";
import { AppFooter } from "./AppFooter";
import { AppHeader } from "./AppHeader";



export class App {
    constructor(){
        this.initElements();
    }

    initElements(){
        const container = new AppContainer();
        const appHeader = new AppHeader();
        const textEditor = new TextEditor();
        const virtualKeyboard = new VirtualKeyboard(textEditor);

        const mainSection = new SectionElement(true);
        mainSection.addElements(textEditor, virtualKeyboard);

        const footer = new AppFooter();

        container.addElements(appHeader, mainSection, footer);
        container.init();
        container.show();
    }
}