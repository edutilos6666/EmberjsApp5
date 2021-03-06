import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('workers', function() {
    this.route('create');
    this.route('update', {path:'/:update_id'});
    this.route('delete',{path:'/:delete_id'});
    this.route('details',{path:'/:details_id'});
  });
  this.route('people');
  this.route('charttest1');
  this.route('students');
  this.route('charttest2');
});

export default Router;
