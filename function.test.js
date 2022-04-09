const functions=require('./function');

test('adds 1 + 2 to equal 3', () => {
    expect(functions.sum(1,2)).toBe(3);
  });

test('sub 1 + 2 to equal 3', () => {
expect(functions.minus(1,2)).not.toBe(3);
});

test('kamal', () => {
expect(functions.kamal()).toEqual({fname: 'kamal', lname: 'nayan'});
});