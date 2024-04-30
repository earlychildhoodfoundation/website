// determine LOI deadline script

// when updating these dates, the cron job that rebuilds the site also needs to be adjusted to the next day
// the cron job for the day after the deadline days is: 0 0 1 2,6,10 * *

const currentYear = new Date().getFullYear();

const deadlines = [
  new Date(currentYear, 0, 31), // Jan 31
  new Date(currentYear, 4, 31), // May 31
  new Date(currentYear, 8, 30), // Sep 30
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const abbreviatedMonths = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

let currentDate = new Date();

// get rid of time data
currentDate.setHours(0, 0, 0, 0);

let nextDeadline = deadlines.find((deadline) => deadline > currentDate);

// if no deadline is found, it means we're past the last deadline of the year. So, the next deadline is the first one of the next year.
if (!nextDeadline) {
  nextDeadline = new Date(deadlines[0]);
  nextDeadline.setFullYear(nextDeadline.getFullYear() + 1);
}

const formattedDeadline = `${months[nextDeadline.getMonth()]} ${nextDeadline.getDate()}, ${nextDeadline.getFullYear()}`;

const abbreviatedFormattedDeadline = `${abbreviatedMonths[nextDeadline.getMonth()]} ${nextDeadline.getDate()}, ${nextDeadline.getFullYear()}`;

module.exports = {
  currentYear,
  formattedDeadline,
  abbreviatedFormattedDeadline,
};
