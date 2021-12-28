
import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Collection } from './Collection';
export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}
type Callback = () => void


const rootUrl = 'http://localhost:3000/users'

export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl),
        )
    }
    static buildUserCollection(): Collection<User, UserProps> {
        return new Collection<User, UserProps>(
            rootUrl,
            (json: UserProps) => User.buildUser(json)
        )
    }

    setRandomAge(): void {
        const age = Math.round(Math.random() * 100);
        this.set({ age })
    }
}


// Implementation before Model Class
// export class User {
//     public events: Eventing = new Eventing();
//     public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
//     public attributes: Attributes<UserProps>;

//     constructor(attrs: UserProps) {
//         this.attributes = new Attributes<UserProps>(attrs);
//     }

//     get on() {
//         return this.events.on;
//     }

//     get trigger() {
//         return this.events.trigger;
//     }

//     get get() {
//         return this.attributes.get;
//     }

//     set(update: UserProps): void {
//         this.attributes.set(update)
//         this.events.trigger('change')
//     }

//     fetch(): void {
//         const id = this.attributes.get('id');
//         if (typeof id !== 'number') {
//             throw new Error('Cannot fetch without an id')
//         }

//         this.sync.fetch(id).then((response: AxiosResponse): void => {
//             this.set(response.data);
//         })
//     }

//     save(): void {
//         this.sync.save(this.attributes.getAll()).then((response: AxiosResponse): void => {
//             this.trigger('save');
//         }).catch(() => {
//             this.trigger('error')
//         })
//     }
// }

/*
Usually when we write a type annotation for an object, we just write out the name of the property 
Ex- click ==> events: { [key: string]: Callback[] } = {};
But in this case we don't know thw names of the events that we are going to have,
We might have eventually an event tied to a user called click or hover or mouseover or maybe like change or sync or delete. 
The point is we just don't know it yet what the different events name are that we will have tied to a user so to solve that we say key: string.
*/

/*
Ways of handling Eventing. 

1. Accept dependencies as second constructor argument.

export class User {
    constructor(
        private data: UserProps,
        private events: Eventing
    ) {}
    ... rest of the definition
}

new User({id:1}, new Eventing());

This might not be the best practice:

Every single time we create a user we have to create an instance of eventing class. 

Meaning when we start to add more functionalities we are going to add more arguments.

Ex- new User({id: 1}, new Eventing(), new Attributes())

-------------------------------------------------------

2. Only Accept dependencies into he constructor.
Define a static class method to preconfigure
User and assign properties afterwards

export class User{
    static fromData(data: UserProps): User {
        const user = new User(new Eventing());
        user.set(data);
        return user;
    }

    private data: UserProps;

    constructor(private events: Eventing) {}
}

This approach is pretty good but at the same time having to do this user.set(data); (feels off). In this case, initializing the user with the correct set of properties so we get data. In the future, we might have a complicated class that require many lines of initialiation. So, we would potentially have to add a tone of configuration inside this static class method if we ever wanted to have some other configuration option like maybe instead of using the Eventing Class use NiceEvents. 

Ex- 

export class User{
    static fromData(data: UserProps): User {
        const user = new User(new Eventing());
        user.set(data);
        return user;
    }

      static fromData(data: UserProps): User {
        const user = new User(new NiceEvents());
        user.set(data);
        return user;
    }

    private data: UserProps;

    constructor(private events: Eventing) {}
}

This duplicates a lot of code.

-------------------------------------------
3. Only accept properties into constructor
Hard code dependencies as class properties.



*/