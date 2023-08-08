export function calculateTimeDistanceToNow(targetDate) {
  const targetDateTime = new Date(targetDate);
  const now = new Date();

  // Calculate the time difference in milliseconds
  const timeDifferenceMillis = now - targetDateTime;

  // Calculate the time difference in seconds, minutes, hours, and days
  const seconds = Math.floor(timeDifferenceMillis / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Calculate the time difference in months and years
  const targetYear = targetDateTime.getFullYear();
  const targetMonth = targetDateTime.getMonth();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth();

  const years = nowYear - targetYear;
  const months = nowMonth - targetMonth + 12 * years;

  return {
    minutes,
    hours,
    days,
    months,
    years,
  };
}

// Calculate View function
export function calculateViews(views) {
  if (views >= 1000 && views < 100000) {
    return (views = (views / 1000).toFixed(1) + "K");
  } else if (views >= 100000 && views < 1000000) {
    return (views = Math.floor(views / 1000) + "K");
  } else if (views >= 1000000 && views <= 100000000) {
    return (views = (views / 1000000).toFixed(1) + "M");
  }
}

// Calculate Time distance function
export function calculateTimeDifference(calcTime) {
  let time;
  if (calcTime.minutes >= 60 && calcTime.days < 1) {
    time = calcTime.hours;
    if (time == 1) time = time + " hour ago";
    else time = time + " hours ago";
    return time;
  } else if (calcTime.days > 0 && calcTime.days < 30) {
    time = calcTime.days;
    if (time == 1) time = time + " day ago";
    else time = time + " days ago";
    return time;
  } else if (calcTime.months >= 1 && calcTime.years < 1) {
    return (time = calcTime.months + " month ago");
  } else if (calcTime.years >= 1) {
    return (time = calcTime.years + " year ago");
  }
}
