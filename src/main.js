import $ from 'jquery';
import { Solar } from 'solar.js';

$(document).ready(function() {
  $('#calculate').submit(function(event) {
    event.preventDefault();
    let birthday = $('#age').val().toString();
    console.log(birthday);
    // let newCalculation = new Solar(birthday);
    $('#output').text('Your age on Mercury: \n Your age on Venus: \n Your age on Mars: \n Your age on Jupiter: \n');
  });
});
