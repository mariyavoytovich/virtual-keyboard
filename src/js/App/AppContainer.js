import { GroupElement } from "../Base/GroupElement";

export class AppContainer extends GroupElement {

  show() {
    const body = document.querySelector('.body');
    super.show(body);
  }
}