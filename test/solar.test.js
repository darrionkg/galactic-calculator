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
  });

  it('converts earth to Mercury days', function() {
    let daysAlive = userTest.getDaysAlive();
    let mercuryDaysAlive = userTest.convertEarthDaysToOtherPlanetDays("Mercury", daysAlive);
    expect(mercuryDaysAlive).toEqual(daysAlive * .24);
  });

  it('converts earth to Venus days', function() {
    let daysAlive = userTest.getDaysAlive();
    let venusDaysAlive = userTest.convertEarthDaysToOtherPlanetDays("Venus", daysAlive);
    expect(venusDaysAlive).toEqual(daysAlive * .62);
  });

  it('converts earth to Mars days', function() {
    let daysAlive = userTest.getDaysAlive();
    let marsDaysAlive = userTest.convertEarthDaysToOtherPlanetDays("Mars", daysAlive);
    expect(marsDaysAlive).toEqual(daysAlive * 1.88);
  });

  it('converts earth to Jupiter days', function() {
    let daysAlive = userTest.getDaysAlive();
    let jupiterDaysAlive = userTest.convertEarthDaysToOtherPlanetDays("Jupiter", daysAlive);
    expect(jupiterDaysAlive).toEqual(daysAlive * 11.86);
  });

  it('gets Mercury age', function() {
    let daysAlive = userTest.getDaysAlive();
    let mercuryDays = userTest.convertEarthDaysToOtherPlanetDays("Mercury", daysAlive);
    expect(userTest.getMercuryAge(mercuryDays)).toEqual(5);
  });



});
