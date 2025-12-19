import {
  describe, it,
  after, afterEach, before, beforeEach,
  context, specify,
  xdescribe, xit,
  xcontext, xspecify,
} from '../node_modules/mocha/mocha.mjs';
import {expect} from '../node_modules/chai/chai.js';

describe('My suite', function () {
  after(() => {
    console.log('after');
  });
  afterEach(() => {
    console.log('after each');
  });
  before(() => {
    console.log('before');
  });
  beforeEach(() => {
    console.log('before each');
  });

  it('my test', function () {
    expect(true).to.equal(true);
  });
});

context('My suite (context)', function () {
  specify('my test (specify)', function () {
    expect(true).to.equal(true);
  });
});

xdescribe('My suite', function () {
  xit('my test', function () {
    expect(true).to.equal(true);
  });
});

xcontext('My suite (context)', function () {
  xspecify('my test (specify)', function () {
    expect(true).to.equal(true);
  });
});
