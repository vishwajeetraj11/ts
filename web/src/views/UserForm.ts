import { User } from "../models/User";

export class UserForm {
    constructor(public parent: Element, public model: User) { }
    template(): string {
        return `
            <div>
            <h1>User Form</h1>
            <div>User name: ${this.model.get('name')}</div>
            <div>User age: ${this.model.get('age')}</div>
            <input />
            <button>Click Me</button>
            <button class='set-age'>Set Random Age</button>
            </div>
        `
    }

    onSetAgeClick(): void {
        // this.model.set({ age: 30 });
        // this.model.trigger('change');
        console.log('onSetAge click')
    }

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
        };
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();
        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');
            fragment.querySelectorAll(selector).forEach((element) => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }

    render(): void {
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content)
        this.parent.append(templateElement.content);
    }
}

/*
Rendering Timeline

- Call 'render' method
- Render calls 'template', gets HTML string
- Render inserts HTML string into a template element
- We should somehow bind event handlers to the HTML in there
- Render inserts content of template into DOM
*/