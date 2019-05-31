import { Solar } from './solar';
import './styles.css'
import Background from './background.jpg';

function getLifeExpectancyMessage(age, lifeExpectancy) {
  if(age < lifeExpectancy) {
    return "Years left until you've reached your life expectancy: "
  } else if(age > lifeExpectancy) {
    return "You've passed your life expectancy in years by: "
  } else if(age === lifeExpectancy) {
    return "Years until your at the end of your life expectency: "
  }
}
$(document).ready(function() {
  $('#calculate').submit(function(event) {
    event.preventDefault();
    let birthday = new Date($('#date').val());
    // let day = birthday.getDate();
    // let month = birthday.getMonth();
    // let year = birthday.getFullYear();
    // let formattedDate = new Date(year, month, day);
    let newCalculation = new Solar(birthday);
    let daysAlive = newCalculation.getDaysAlive();
    let mercuryDays = newCalculation.convertEarthDaysToOtherPlanetDays("Mercury", daysAlive);
    let venusDays = newCalculation.convertEarthDaysToOtherPlanetDays("Venus", daysAlive);
    let marsDays = newCalculation.convertEarthDaysToOtherPlanetDays("Mars", daysAlive);
    let jupiterDays = newCalculation.convertEarthDaysToOtherPlanetDays("Jupiter", daysAlive);

    let mercuryAge = newCalculation.getOtherPlanetYearsOld(mercuryDays);
    let venusAge = newCalculation.getOtherPlanetYearsOld(venusDays);
    let marsAge = newCalculation.getOtherPlanetYearsOld(marsDays);
    let jupiterAge = newCalculation.getOtherPlanetYearsOld(jupiterDays);

    let mercuryLifeExpectancy = newCalculation.getPlanetLifeExpectancy("Mercury");
    let venusLifeExpectancy = newCalculation.getPlanetLifeExpectancy("Venus");
    let marsLifeExpectancy = newCalculation.getPlanetLifeExpectancy("Mars");
    let jupiterLifeExpectancy = newCalculation.getPlanetLifeExpectancy("Jupiter");

    let compareMercury = newCalculation.checkLifeExpectancy(mercuryAge, mercuryLifeExpectancy);
    let compareVenus = newCalculation.checkLifeExpectancy(venusAge, venusLifeExpectancy);
    let compareMars = newCalculation.checkLifeExpectancy(marsAge, marsLifeExpectancy);
    let compareJupiter = newCalculation.checkLifeExpectancy(jupiterAge, jupiterLifeExpectancy);

    $('#output').text('Your age on Mercury: ' +mercuryAge+ ' Your age on Venus: ' +venusAge+ ' Your age on Mars: ' +marsAge+ ' Your age on Jupiter: ' +jupiterAge);

    let message = getLifeExpectancyMessage(jupiterAge, jupiterLifeExpectancy);

    $('#lifeExpectancy').text("Mercury "+message+compareMercury+ ". Venus "+message+compareVenus+ ". Mars "+message+compareMars+ ". Jupiter"+message+compareJupiter);
  });
});
