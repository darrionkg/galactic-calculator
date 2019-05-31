import { Solar } from '../src/solar';

describe('Solar', function() {
  it('creates an instance that stores an age', function() {
    let userTest = new Solar('October 13, 2014');
    expect(userTest.birthDay.getFullYear()).toEqual(2014);
    expect(userTest.birthDay.getMonth()).toEqual(9);
    expect(userTest.birthDay.getDate()).toEqual(13);
  });

});
