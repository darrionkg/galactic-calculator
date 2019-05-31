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
    expect(userTest.getOtherPlanetYearsOld(mercuryDays)).toEqual(5);
  });

  it('gets Venus age', function() {
    let daysAlive = userTest.getDaysAlive();
    let venusDays = userTest.convertEarthDaysToOtherPlanetDays("Venus", daysAlive);
    expect(userTest.getOtherPlanetYearsOld(venusDays)).toEqual(14);
  });

  it('gets Mars age', function() {
    let daysAlive = userTest.getDaysAlive();
    let marsDays = userTest.convertEarthDaysToOtherPlanetDays("Mars", daysAlive);
    expect(userTest.getOtherPlanetYearsOld(marsDays)).toEqual(44);
  });

  it('gets Jupiter age', function() {
    let daysAlive = userTest.getDaysAlive();
    let jupiterDays = userTest.convertEarthDaysToOtherPlanetDays("Jupiter", daysAlive);
    expect(userTest.getOtherPlanetYearsOld(jupiterDays)).toEqual(283);
  });

  it('determines other plants average life expectancy', function() {
    let daysAlive = userTest.getDaysAlive();
    let mercuryDays = userTest.convertEarthDaysToOtherPlanetDays("Mercury", daysAlive);
    let venusDays = userTest.convertEarthDaysToOtherPlanetDays("Venus", daysAlive);
    let marsDays = userTest.convertEarthDaysToOtherPlanetDays("Mars", daysAlive);
    let jupiterDays = userTest.convertEarthDaysToOtherPlanetDays("Jupiter", daysAlive);
    expect(userTest.getPlanetLifeExpectancy("Mercury")).toEqual(17.16);
    expect(userTest.getPlanetLifeExpectancy("Venus")).toEqual(44.33);
    expect(userTest.getPlanetLifeExpectancy("Mars")).toEqual(134.42);
    expect(userTest.getPlanetLifeExpectancy("Jupiter")).toEqual(847.99);
  });

  it('finds years until life expectancy', function() {
    let daysAlive = userTest.getDaysAlive();
    let mercuryDays = userTest.convertEarthDaysToOtherPlanetDays("Mercury", daysAlive);
    let mercuryYearsOld = userTest.getOtherPlanetYearsOld(mercuryDays);
    let mercuryLifeExpectancy = userTest.getPlanetLifeExpectancy("Mercury");
    expect(userTest.checkLifeExpectancy(mercuryYearsOld, mercuryLifeExpectancy)).toEqual(12);
  });

  it('finds years past', function() {
    let userTest2 = new Solar('July 11, 1910');
    let daysAlive = userTest2.getDaysAlive();
    let mercuryDays = userTest2.convertEarthDaysToOtherPlanetDays("Mercury", daysAlive);
    let mercuryYearsOld = userTest2.getOtherPlanetYearsOld(mercuryDays);
    let mercuryLifeExpectancy = userTest2.getPlanetLifeExpectancy("Mercury");
    userTest2.checkLifeExpectancy(mercuryYearsOld, mercuryLifeExpectancy);
    expect(userTest2.checkLifeExpectancy(mercuryYearsOld, mercuryLifeExpectancy)).toEqual(12);
  });
});
