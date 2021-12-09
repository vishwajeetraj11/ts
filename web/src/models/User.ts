import axios, { AxiosResponse } from "axios";

interface UserProps {
    id?: number;
    name?: string,
    age?: number
}

type Callback = () => void

export class User {

    /*
    Usually when we write a type annotation for an object, we just write out the name of the property 
    Ex- click ==> events: { [key: string]: Callback[] } = {};
    But in this case we don't know thw names of the events that we are going to have,
    We might have eventually an event tied to a user called click or hover or mouseover or maybe like change or sync or delete. 
    The point is we just don't know it yet what the different events name are that we will have tied to a user so to solve that we say key: string.
    */
    events: { [key: string]: Callback[] } = {};

    constructor(private data: UserProps) { }

    get(propName: string): (string | number) {
        return this.data[propName]
    }

    set(update: UserProps): void {
        Object.assign(this.data, update);
    }

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

    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`).then((response: AxiosResponse): void => {
            this.set(response.data);
            console.log(this.data)
        }).catch((e: any) => {
            if (axios.isAxiosError(e)) {
                if (e.response.status === 404) {
                    console.warn('User not found.')
                }
            }
        })
    }
}
