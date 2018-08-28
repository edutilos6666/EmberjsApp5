import Route from '@ember/routing/route';


function clearInputs(controller) {
  controller.set('myid', '');
  controller.set('name', '');
  controller.set('age', '');
  controller.set('wage', '');
  controller.set('active', '');
}

export default Route.extend({
  actions: {
    createWorker() {
      let controller = this.get('controller');
      // let myid = parseInt(controller.get('myid'));
      let name = controller.get('name');
      let age = parseInt(controller.get('age'));
      let wage = parseInt(controller.get('wage'));
      let active = controller.get('active') === 'True' || controller.get('active')=== 'true';
      let newWorker = this.store.createRecord('worker', {
        // myid: myid ,
        name: name,
        age: age,
        wage: wage,
        active: active
      });
      newWorker.save();
      clearInputs(controller);
      this.transitionTo('workers');
    }
  }
});
