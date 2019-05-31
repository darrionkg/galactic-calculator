import { Solar } from './solar';
import './styles.css'
import Background from './background.jpg';

$(document).ready(function() {
  $('#calculate').submit(function(event) {
    event.preventDefault();
    let birthday = new Date($('#date').val());
    let day = birthday.getDate();
    let month = birthday.getMonth();
    let year = birthday.getFullYear();
    let formattedDate = new Date(year, month, day);
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

    $('#output').text('Your age on Mercury: ' +mercuryAge+ ' Your age on Venus: ' +venusAge+ ' Your age on Mars: ' +marsAge+ ' Your age on Jupiter: ' +jupiterAge);

    $('#lifeExpectancy').text('')
  });
});
