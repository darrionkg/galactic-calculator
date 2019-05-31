import { Solar } from '../src/solar';

test('creates an instance that stores an age', function() {
  let userTest = new Solar(23);
  expect(userTest.age).toEqual(23);
});
