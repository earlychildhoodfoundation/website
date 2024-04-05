const currentYear = new Date().getFullYear();

// Determine LOI deadline script
const deadlines = [
  // When updating these dates, the cron job that rebuilds the site also needs to be adjusted to the next day
  // The cron job for the day after these days is: 0 0 1 2,6,10 * *
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

let currentDate = new Date();
currentDate.setHours(0, 0, 0, 0); // get rid of time data

let nextDeadline = deadlines.find((deadline) => deadline > currentDate);

// If no deadline is found, it means we're past the last deadline of the year. So, the next deadline is the first one of the next year.
if (!nextDeadline) {
  nextDeadline = new Date(deadlines[0]);
  nextDeadline.setFullYear(nextDeadline.getFullYear() + 1);
}

const formattedDeadline = `${months[nextDeadline.getMonth()]} ${nextDeadline.getDate()}, ${nextDeadline.getFullYear()}`;

module.exports = { currentYear, formattedDeadline };
