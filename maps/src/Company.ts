
import faker from 'faker'
import { Mappable } from './CustomMaps';

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'crimson';


    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.latitude())
        }
    }

    markerContent(): string {
        return `
          <div>
            <h1>Company Name: ${this.companyName}</h1>
            <h3>Catchphrase: ${this.catchPhrase}</h3>
          </div>
        `;
      }
}