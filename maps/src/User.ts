
import faker from 'faker'
import { Mappable } from './CustomMaps';

/*
JS Library import in a TS project will throw warning that the type definition file is not found.

Could not find a declaration file for module 'faker'. '/Users/vishwajeetraj/Documents/maps/node_modules/faker/index.js' implicitly has an 'any' type.
*/

export class User implements Mappable {
    /*
    implements Mappable tells typescript to make sure every instance of User satisfies all properties of Mappable.
    */
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'teal';

    /*
    At this point ts only knows location is going to an object with lat,lng as properties. 
    so setting values as this.location.lat will throw an error unable to access property lat of undefined.
    therfore,
    setting value like this makes sense:
    this.location = {
        lat: 87,
        lng: 2
    }
    */

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.latitude())

        }
    }
    markerContent(): string {
        return `User Name: ${this.name}`;
      }
}