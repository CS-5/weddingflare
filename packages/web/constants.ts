/* Overview */
export const SITE_TITLE = "Carson & Tatianna"; // Note: Title is used to set the site title and from name (email)
export const SITE_URL = "https://carsonandtatianna.com";

/* Event Location, Date, Time */
export const EVENT_LOCATION = {
  url: process.env.LOCATION_URL ?? "",
  myMapUrl: process.env.LOCATION_MYMAP_URL ?? "",
  address: process.env.LOCATION_ADDRESS ?? "",
  lat: process.env.LOCATION_LAT ?? 0,
  lng: process.env.LOCATION_LNG ?? 0,
};
export const EVENT_TIMEZONE = "America/New_York";
export const EVENT_DATETIME = new Date("June 12, 2022 15:00");
export const EVENT_LOCAL_TIME = EVENT_DATETIME.toLocaleTimeString("en-US", {
  timeZone: EVENT_TIMEZONE,
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});
export const EVENT_LOCAL_DATE = EVENT_DATETIME.toLocaleDateString("en-US", {
  timeZone: EVENT_TIMEZONE,
  month: "long",
  day: "numeric",
  year: "numeric",
});

/* Schedule */
export const SCHEDULE = [
  {
    time: "August 1st @ 2PM",
    description: "Arrive and socialize",
  },
  {
    time: "August 1st @ 3PM",
    description: "Event start",
  },
  {
    time: "...",
    description: "...",
  },
  {
    time: "August 1st @ 8PM",
    description: "After Party",
  },
];

/* Email Message */
export const EMAIL_FROM = "eventflare@mail.seese.xyz";

/* Other */
export const MAPS_API_KEY = process.env.MAPS_API_KEY ?? "";
