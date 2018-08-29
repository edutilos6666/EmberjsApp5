import DS from 'ember-data';
const { Model } = DS;
import {attr} from '@ember-decorators/data';

export default class StudentModel extends Model {
  @attr('string') name;
  @attr('number') age;
  @attr('number') wage;
  @attr('boolean') active;
}
