type Callback = () => void

export class Eventing {
    /*
Usually when we write a type annotation for an object, we just write out the name of the property 
Ex- click ==> events: { [key: string]: Callback[] } = {};
But in this case we don't know the names of the events that we are going to have,
We might have eventually an event tied to a user called click or hover or mouseover or maybe like change or sync or delete. 
The point is we just don't know it yet what the different events name are that we will have tied to a user so to solve that we say key: string.
*/

    events: { [key: string]: Callback[] } = {};

    on(eventName: string, callback: Callback): void {
        // this.events[eventName] ==> Callback[] or undefined
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string): void {
        const handlers = this.events[eventName];
        // this.events[eventName] ==> Callback[] or undefined

        if (!handlers || handlers.length === 0) {
            return;
        }

        handlers.forEach(callback => {
            callback();
        })
    }
}