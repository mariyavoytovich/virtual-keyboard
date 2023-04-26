export class UIElement {
  show(container) {
  }

  createElement() { }

  createDomNode(element, ...classes) {
    const node = document.createElement(element);
    node.classList.add(...classes);
    return node
  };

  init() {}
}