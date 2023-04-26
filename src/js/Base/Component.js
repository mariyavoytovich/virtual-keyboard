export class Component{
    show(container){
        const element = this.createElement();
        container.append(element);
    }

    createElement(){}

    createDomNode (element, ...classes){
        const node = document.createElement(element);
        node.classList.add(...classes);
        return node
    };
}