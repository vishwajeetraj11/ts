import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
    template(): string {
        return `
            <div>
            <input placeholder="${this.model.get('name')}" />
            <button class='set-name'>Change Name</button>
            <button class='set-age'>Set Random Age</button>
            <button class='save-model'>Save</button>
            </div>
        `
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge()
    }

    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input');
        if (input) {
            const name = input.value;
            this.model.set({ name })
        }
    }

    onSaveClick = (): void => {
        this.model.save();
    }

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-model': this.onSaveClick,
        };
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