const axios = require("axios");
const settings = require("../setting");
const location = (lon = 102.6, lat = 17.9667) => {
  return axios.get(
    `${settings.api_Url}?lon=${lon}&lat=${lat}&appid=${settings.api_key}&units=metric`
  );
};

module.exports = location;
