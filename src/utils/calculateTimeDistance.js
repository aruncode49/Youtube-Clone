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

// // Example usage:
// const targetDate = "2023-08-04T04:00:33Z";
// const distance = calculateTimeDistanceToNow(targetDate);

// console.log("Minutes:", distance.minutes);
// console.log("Hours:", distance.hours);
// console.log("Days:", distance.days);
// console.log("Months:", distance.months);
// console.log("Years:", distance.years);
