import Route from '@ember/routing/route';
import PersonModel from 'app5/person/model';
import Ember from 'ember';
import {service} from '@ember-decorators/service';


export default Route.extend({
   generatePeople: function() {
    let arr = [
      {
        firstName: 'foo',
        lastName: 'bar',
        age: 10,
        wage: 100.0,
        email: 'foo@bar.com',
        country: 'Germany',
        city: 'Essen',
        postalCode: 44800,
        street: 'Laerholzstrasse',
        familyStatus: 'ledig'
      },
      {
        firstName:'edu',
        lastName: 'tilos',
        age: 20,
        wage:200.0,
        email: 'edu@tilos.org',
        country: 'Germany',
        city: 'Bochum',
        postalCode: 44801,
        street: 'Sumperkamp',
        familyStatus: 'verheiratet'
      }
    ];
    return arr;
  },
  model() {
    return this.generatePeople();
  }
});
