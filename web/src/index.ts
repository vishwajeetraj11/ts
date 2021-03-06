/*
    Inside of our framework we'll have two different classes.

    1. Modal Classes - A modal class is going to be any kind of class, that is meant to handle some data.
                       Modal classes are used to handle data, used to represent Users, Blog Posts, Images, etc
    2. View Classes - A View class is going to be responsible for producing HTML, and showing that HTML to the user, its also going to be responsible for handling events caused by the user like clicks or typing or hiting the enter key or anything like that.
 */

/*
class User
private data: UserProps {Object to store information about a particular user(name, age)}
get(propName: string): (string|number) {Gets a single piece of info about this user (name, age)}
set(update: UserProps): void {Changes information about this user (name, age)}
on(eventName: string, callback: () => {}) {Registers an event handler with this object, so other parts of the app know when something changes}
trigger(eventName: string): void {Triggers an event to tell other parts of the app that something has changed.}
fetch(): Promise {Fetches some data from the server about a particular user}
save(): Promise {Saves some data about this user to this server}
*/

/*
JSON Server
npm i -g json-server
json-server -w db.json
*/

// import { UserList } from './views/UserList';
// import { Collection } from './models/Collection';
// import { UserProps, User } from './models/User';
// import { UserEdit } from './views/UserEdit';

// const user = User.buildUser({ name: 'NAME', age: 40 })

// const root = document.getElementById('root');

// if (root) {
//     const userEdit = new UserEdit(
//         document.getElementById('root'), user
//     );

//     userEdit.render();
// } else {
//     throw new Error('Root Element not found.')
// }

import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserProps, User } from './models/User';
import { UserEdit } from './views/UserEdit';


const collection = new Collection(
    'http://localhost:3000/users',
    (json: UserProps) => {
        return User.buildUser(json);
    }
);

collection.on('change', () => {
    const root = document.getElementById('root');
    if (root) {
        const userList = new UserList(root, collection)
        userList.render();

    }
});

collection.fetch();

/* A quick reminder on accessors
class Person {
    constructor(public firstName: string, public lastName: string) { }

    // fullName(): string {
    //     return `${this.firstName} ${this.lastName}`
    // }
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

const person = new Person('first', 'last');
// console.log(person.fullName())
console.log(person.fullName)
*/

/*
Reminder on how 'this' works in javascript.
*/