import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | workers/delete', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:workers/delete');
    assert.ok(route);
  });
});
