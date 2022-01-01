/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MAPS_API_KEY: process.env.MAPS_API_KEY,
    LOCATION_ADDRESS: process.env.LOCATION_ADDRESS,
    LOCATION_URL: process.env.LOCATION_URL,
    LOCATION_LAT: process.env.LOCATION_LAT,
    LOCATION_LNG: process.env.LOCATION_LNG,
    LOCATION_MYMAP_URL: process.env.LOCATION_MYMAP_URL,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.API_URL ?? ""}/api/:path*`,
      },
    ];
  },
};
