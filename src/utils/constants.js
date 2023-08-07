const GOOGLE_API_KEY = "AIzaSyBuRhu_PBDaQ8Vf785001jiZ20hXLQ9iOI";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

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
