import { UIElement } from "./UIElement";

export class ItemElement extends UIElement {

  show(container) {
    const element = this.createElement();
    container.append(element);
  }
}