export class UserForm {
    constructor(public parent: Element) { }
    template(): string {
        return `
            <div>
            <h1>User Form</h1>
            <input />
            <button>Click Me</button>
            </div>
        `
    }

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:button': this.onButtonClick,
        };
    }

    onButtonClick(): void {
        console.log('Yeeeh!')
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