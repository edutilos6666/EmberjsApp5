import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    let all = this.store.findAll('note');
    console.log(all);
    return all; 
  }
});
