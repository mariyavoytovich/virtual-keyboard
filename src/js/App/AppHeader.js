import { HeaderElement } from "../Base/HeaderElement";
import { SectionElement } from "../Base/SectionElement";

const cssClasses = {
  HEADER: 'header'
}

const HEADER_TEXT = 'RSS Виртуальная клавиатура';

export class AppHeader extends SectionElement {

  init(){
    const header = new HeaderElement(1, HEADER_TEXT);
    this._contentWrapper.addElement(header);
  }

  createElement() {
    return this.createDomNode('header', cssClasses.HEADER);
  }
}