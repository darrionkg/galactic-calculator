import { Solar } from '../src/solar';

describe('Solar', function() {
  let userTest;
  beforeEach(function() {
    userTest = new Solar('July 11, 1995');
  });

  it('creates an instance that stores an age', function() {
    expect(userTest.birthDay.getFullYear()).toEqual(1995);
    expect(userTest.birthDay.getMonth()).toEqual(6);
    expect(userTest.birthDay.getDate()).toEqual(11);
  });

  it('gets the total days alive', function() {
    expect(userTest.getDaysAlive()).toEqual(8719.16);
  })

  it('gets Mercury age with just year calc', function() {
    let mercuryAge = userTest.getMercuryAge();
    let current = new Date();
    console.log(mercuryAge);
    console.log(current)
    expect(mercuryAge).toEqual(5.76);
  });


});
