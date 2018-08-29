import Component from '@ember/component';
import {tagName} from '@ember-decorators/component';
import {computed} from '@ember-decorators/object';
// import {argument} from '@ember-decorators/argument';
// import {type} from '@ember-decorators/argument/type';
import PersonModel from 'app5/person/model';
import { get } from '@ember/object';

@tagName('div')
export default class PersonViewComponent extends Component.extend({}) {
  // @argument
  // @type('string')
  space = ' ';

  @computed('person.firstName','person.lastName')
  get fullName() {
    const firstName = get(this,'person.firstName');
    const lastName = get(this,'person.lastName');
    const space = get(this, 'space');
    return firstName+ space + lastName;
  }
  @computed('person.country', 'person.city', 'person.postalCode', 'person.street')
  get address() {
    const country = get(this, 'person.country');
    const space = get(this, 'space');
    const city = get(this, 'person.city');
    const postalCode = get(this, 'person.postalCode');
    const street = get(this, 'person.street');
    return country + space + city + space + postalCode + space + street;
  }
  //
  // @computed('person.fullName', 'person.age', 'person.wage', 'person.email', 'person.address', 'person.familyStatus')
  // fullInfo(fullName, age, wage, email, address, familyStatus) {
  //   return fullName + space + age + space + wage + space + email + space + address + space + familyStatus;
  // }
}
