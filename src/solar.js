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

  getMercuryAge() {
    let mercuryYearBorn = this.birthDay.getFullYear()
    let mercuryYearAge = this.currentDate.getFullYear() - mercuryYearBorn;
    console.log(mercuryYearAge);
    let result = mercuryYearAge * .24
    console.log(result);
    // using date format (year, month, day)
    return result;
  }


}
