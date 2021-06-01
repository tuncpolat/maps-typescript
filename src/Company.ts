import faker from 'faker';
import { Mappable } from './CustomMap'


export class Company implements Mappable {

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }
  color: string = "orange";

  markerContent(): string {
    return `Company name is: ${this.name}`
  }
}