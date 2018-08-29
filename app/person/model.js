import DS from 'ember-data';
const { Model } = DS;
import {attr} from '@ember-decorators/data';
import EmberObject from '@ember/object';
// import {argument} from '@ember-decorators/argument';
// import {type} from '@ember-decorators/argument/type';
import {computed} from '@ember-decorators/object';

export default class PersonModel extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('number') age;
  @attr('number') wage;
  @attr('string') email;
  @attr('string') country;
  @attr('string') city;
  @attr('number') postalCode;
  @attr('string') street;
  @attr('string') familyStatus;

  // @computed('person.{firstName,lastName}')
  // fullName(firstName, lastName) {
  //   return firstName + ' ' + lastName;
  // }
}
