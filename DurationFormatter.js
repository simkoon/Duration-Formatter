const ONE_YEAR = 365 * 24 * 60 * 60;
const ONE_DAY = 24 * 60 * 60;
const ONE_HOUR = 60 * 60;
const ONE_MINUTE = 60;

console.log(ONE_YEAR, '  ', ONE_DAY, '  ', ONE_HOUR);
function formatDuration(timeSeconds) {
  let year = 0;
  let day = 0;
  let hour = 0;
  let minute = 0;
  let second = 0;

  year = Math.floor(timeSeconds / ONE_YEAR);
  timeSeconds = timeSeconds % ONE_YEAR;

  day = Math.floor(timeSeconds / ONE_DAY);
  timeSeconds = timeSeconds % ONE_DAY;

  hour = Math.floor(timeSeconds / ONE_HOUR);
  timeSeconds = timeSeconds % ONE_HOUR;

  minute = Math.floor(timeSeconds / ONE_MINUTE);
  timeSeconds = timeSeconds % ONE_MINUTE;

  second = timeSeconds;

  let str = '';

  if (!(year === 0)) {
    str += year === 1 ? `${year} year` : `${year} years`;
  }
  if (!(day === 0)) {
    if (!(str === '')) {
      str += ', ';
    }
    str += day === 1 ? `${day} day` : `${day} days`;
  }
  if (!(hour === 0)) {
    if (!(str === '')) {
      str += ', ';
    }
    str += hour === 1 ? `${hour} hour` : `${hour} hours`;
  }
  if (!(minute === 0)) {
    if (!(str === '')) {
      str += ', ';
    }
    str += minute === 1 ? `${minute} minute` : `${minute} minutes`;
  }
  if (!(second === 0)) {
    if (!(minute === 0)) {
      str += ' and ';
    } else if (!(str === '')) {
      str += ', ';
    }
    str += second === 1 ? `${second} second` : `${second} seconds`;
  }
  console.log(year, day, minute, second);

  return str;
}
console.log(
  formatDuration(
    365 * 24 * 60 * 60 * 2 + 60 * 60 * 3 + 2 + 60 * 3 + 60 * 60 * 24 * 3
  )
);
