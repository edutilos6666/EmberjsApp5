import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('worker', params.delete_id);
  },
  actions: {
    deleteWorker() {
      let controller = this.get('controller');
      let id = controller.get('model.id');
      let $this = this;
      // let worker = this.store.peekRecord('worker', id);
      // if(worker) {
      //   worker.destroyRecord().then(function() {
      //     $this.transitionTo('workers');
      //   });
      // }backgroundReload
      this.store.findRecord('worker', id, {backgroundReload:false}).then(function(worker) {
        // worker.destroyRecord();
        $this.store.deleteRecord(worker);
        worker.save();
        $this.transitionTo('workers');
      });
    }
  }
});
