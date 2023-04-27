import { UIElement } from "./UIElement";

export class ItemElement extends UIElement {

  show(container, props) {
    const element = this.createElement(props);
    container.append(element);
  }
}