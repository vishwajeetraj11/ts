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