import {describe, it} from '../node_modules/mocha/mocha.js';
import {expect} from '../node_modules/chai/chai.js';

describe('My suite', function () {
  it('my test', function () {
    expect(true).to.equal(true);
  });
});
