const axios = require("axios");
const settings = require("../setting");
const city = (cityName = "Vientiane", countryCode = "la") => {
  return axios.get(
    `${settings.api_Url}?q=${cityName},${countryCode}&appid=${settings.api_key}&units=metric`
  );
};

module.exports = city;
