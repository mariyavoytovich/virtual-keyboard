import { FooterElement } from "../Base/FooterElement";
import { PElement } from "../Base/PElement";

const cssClasses = {
  DESCRIPTION: 'description',
  LANGUAGE: 'language'

}
export class AppFooter extends FooterElement {

  init() {
    const description = new PElement('Клавиатура создана в операционной системе Windows', [cssClasses.DESCRIPTION]);
    const language = new PElement('Для переключения языка комбинация: ctrl + alt', [cssClasses.LANGUAGE]);
    this._contentWrapper.addElements(description, language);
    super.init();
  }
}