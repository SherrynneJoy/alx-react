const $ = require("jquery");
const _ = require('lodash');
import "../css/main.css";

const count = 0;
function updateCounter() {
  count++;
  document.getElementById('count').textContent = `${count} clicks on the button`;
}

const debouncedUpdateCounter = _.debounce(updateCounter, 600);
document.getElementById('clickButton').addEventListener('click', debouncedUpdateCounter);

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<p>Click here to get started</p>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');
