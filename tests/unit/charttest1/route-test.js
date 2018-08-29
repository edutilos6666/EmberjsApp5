import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | charttest1', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:charttest1');
    assert.ok(route);
  });
});
