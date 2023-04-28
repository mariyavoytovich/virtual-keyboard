import { ContentWrapper } from "./ContentWrapper";
import { UIElement } from "./UIElement";

export class SectionElement extends UIElement {
  _contentWrapper = new ContentWrapper();

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