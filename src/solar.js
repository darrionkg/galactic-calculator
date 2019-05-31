export class Solar {
  constructor(birthDay) {
    this.birthDay = new Date(birthDay);
    //this.year = birthDay.getFullYear();
    // this.month = birthDay.getMonth();
    // this.day = birthDay.getDate();
    this.currentDate = new Date();
  }

  getDaysAlive() {
    let currentYearDifference = this.currentDate.getFullYear() - this.birthDay.getFullYear();
    let currentMonthDifference = this.currentDate.getMonth() - this.birthDay.getMonth();
    let currentDateDifference = this.currentDate.getDate() - this.birthDay.getDate();

    let yearsToDays = currentYearDifference * 365;
    let monthsToDays = currentMonthDifference * 30.42;

    return yearsToDays + monthsToDays + currentDateDifference;
  }
  convertEarthDaysToOtherPlanetDays(planet, daysAlive) {
    if(planet === "Mercury") {
      return daysAlive * .24
    } else if(planet === "Venus") {
      return daysAlive * .62
    } else if(planet === "Mars") {
      return daysAlive * 1.88
    } else if(planet === "Jupiter") {
      return daysAlive * 11.86
    }
  }

  getOtherPlanetYearsOld(days) {
    return Math.floor(days / 365);
  }

  getPlanetLifeExpectancy(planet) {
    const averageEarthExpectancy = 71.5;
    let rate;
    if(planet === "Mercury") {
      rate = .24;
    } else if(planet === "Venus") {
      rate = .62;
    } else if(planet === "Mars") {
      rate = 1.88;
    } else if(planet === "Jupiter") {
      rate = 11.86;
    }
    return averageEarthExpectancy * rate;
  }

  checkLifeExpectancy(planetAge, planetLifeExpectancy) {
    if(planetAge < planetLifeExpectancy) {
      return Math.floor(planetLifeExpectancy - planetAge);
    } else if(planetAge > planetLifeExpectancy) {
      return Math.floor(planetAge - planetLifeExpectancy);
    }

  }
}
