import { UIElement } from "./UIElement";

export class GroupElement extends UIElement {
  _elements = [];

  show(container) {
    const groupContainer = this.createElement();
    for (let element of this._elements) {
      element.show(groupContainer);
    }
    container.append(groupContainer);
  }

  addElements(...elements) {
    this._elements.push(...elements);
  }

  addElement(element){
    this._elements.push(element);
  }

  init() {
    this._elements.forEach(component => component.init());
  }
}