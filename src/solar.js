export class Solar {
  constructor(birthDay) {
    this.birthDay = new Date(birthDay);
    //this.year = birthDay.getFullYear();
    // this.month = birthDay.getMonth();
    // this.day = birthDay.getDate();
    this.currentDate = new Date();
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
