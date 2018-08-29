import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | charttest2', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:charttest2');
    assert.ok(route);
  });
});
