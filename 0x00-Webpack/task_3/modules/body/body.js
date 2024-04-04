const $ = require("jquery");
const _ = require('lodash');
import './body.css';

let count = 0;

$("body").append('<p>Dashboard data for the students</p>');
$("body").append('<button>Click here to get started</button>');
$("body").append('<p id="count"></p>');

$("button").on('click', _.debounce(updateCounter, 600));

function updateCounter() {
  count = count + 1;
  $('#count').text(count + ' clicks on th button');
}
