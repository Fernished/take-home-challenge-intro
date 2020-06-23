const doNothing = require('./script');

const example1 = require('../../examples/example_1.json');
const example2 = require('../../examples/example_2.json');

describe('doNothing', () => {
  it('it returns the objects back', () => {
    expect(doNothing(example1)).toEqual({ hello: 'world' });
    expect(doNothing(example2)).toEqual({ go: 'fernish!' });
  });
});
