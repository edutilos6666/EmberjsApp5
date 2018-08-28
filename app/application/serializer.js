import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: '_id',
  serializeId: function(id) {
    console.log("serialized id = "+ id);
    return id.toString();
  }
});

//
// import DS from 'ember-data';
//
// export default DS.RESTSerializer.extend({
//   normalize(model, hash, prop) {
//     hash.id = hash._id;
//     delete hash._id;
//     // if (prop === 'comments') {
//     //   hash.id = hash._id;
//     //   delete hash._id;
//     // }
//
//     return this._super(...arguments);
//   }
// });
