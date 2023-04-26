import { UIElement } from "../Base/UIElement";
import { GroupElement } from "../Base/GroupElement";

const cssClasses = {
  APP_CONTAINER: "container"
}

export class AppContainer extends GroupElement {

  show() {
    const body = document.querySelector('body');
    super.show(body);
  }

  createElement() {
    return this.createDomNode('div', cssClasses.APP_CONTAINER);
  }
}