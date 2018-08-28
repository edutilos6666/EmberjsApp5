import Route from '@ember/routing/route';
import Worker from 'app5/worker/model';



export default Route.extend({
  model(params) {
    // alert(params);
    // console.log(params);
    return this.store.findRecord('worker', params.update_id);

    // return this.store.queryRecord('worker', {
    //     filter: {
    //       id: params.update_id
    //     }
    //   }).then(function(found) {
    //     console.log(found);
    //     return found;
    //   });

    },
  actions: {
    updateWorker() {
      let controller = this.get('controller');
      console.log(controller);
      let id = controller.get('model.id');
      console.log("id = ", id);
      let name = controller.get('model.name');
      let age = parseInt(controller.get('model.age'));
      let wage = parseFloat(controller.get('model.wage'));
      // console.log(controller.get('model.active'));
      // let active = controller.get('model.active') == 'True' || controller.get('model.active') == 'true';
      let active = JSON.parse(controller.get('model.active'));
      let $this = this;
      // this.store.queryRecord('worker', {
      //    filter: {
      //      myid: myid
      //    }
      //  })

       // this.store.queryRecord('worker',{filter: {id:id}})

       this.store.findRecord('worker', id).then(function(worker) {
        // console.log(worker);
        worker.set('name', name);
        worker.set('age', age);
        worker.set('wage', wage);
        worker.set('active', active);
        worker.save();
        // clearInputs(controller);
        $this.transitionTo('workers');
      });
    }
  }
});
