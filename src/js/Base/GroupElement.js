import { UIElement } from "./UIElement";

export class GroupElement extends UIElement {
  _elements = [];

  show(container, props) {
    const groupContainer = this.createElement(props);
    for (let element of this._elements) {
      element.show(groupContainer, props);
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
    this._elements.forEach(element => element.init());
  }

  refresh(props) {
    this._elements.forEach(element => element.refresh(props));
  }
}