import { SectionElement } from "./SectionElement";

export class MainSection extends SectionElement{
    createElement(){
        return this.createDomNode('main');
    }
}