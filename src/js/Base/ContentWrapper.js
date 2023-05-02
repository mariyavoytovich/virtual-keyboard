import { GroupElement } from "./GroupElement";

const cssClasses = {
  WRAPPER: "wrapper"
}

export class ContentWrapper extends GroupElement {

  createElement() {
    return this.createDomNode('div', cssClasses.WRAPPER);
  }
}