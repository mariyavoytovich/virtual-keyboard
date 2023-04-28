import { SectionElement } from "./SectionElement";

const cssClasses = {
  FOOTER: 'footer'
}

export class FooterElement extends SectionElement {
  createElement() {
    return this.createDomNode('footer', cssClasses.FOOTER);
  }
}