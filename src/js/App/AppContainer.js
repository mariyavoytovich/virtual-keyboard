import { Component } from "../Base/Component";

const cssClasses ={
    APP_CONTAINER : "container"
}

export class AppContainer extends Component{

    _componetns = [];

    show(){
        const body = document.querySelector('body');
        super.show(body);
    }

    createElement(){
        const container = this.createDomNode('div', cssClasses.APP_CONTAINER);
        for(let component of this._componetns){
            component.show(container);
        }
        return container;
    }

    addComponents(...components){
        this._componetns.push(...components);
    }
}