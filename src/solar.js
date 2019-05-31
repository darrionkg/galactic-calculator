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
