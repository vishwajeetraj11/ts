import { User, UserProps } from "./User";

export class Attributes<T> {

    constructor(private data: T) { }

    get<K extends keyof T>(key: K): T[K] {
        return this.data[key]
    }

    set(update: T): void {
        Object.assign(this.data, update);
    }

}

/*
- 1. In Typescript strings can be types

- 2. In JS (and therefore TS), all object keys are strings

Ex: type BestName = 'stephen';
    const printName = (name: BestName): void {

    };

    printName('stephen');
    printName('anyotherstring') // Err

Therefore, KEYS OF AN OBJECT CAN ACTUALLY BE A TYPE.

*/

// const attrs = new Attributes<UserProps>({
//     id:5,
//     age:20,
//     name: 'Vishwajeet'
// })

// const name = attrs.get('name')