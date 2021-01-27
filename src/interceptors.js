/**
 * This is a global configuration that will intercept each request 
 * by adding an authorization header with a JWT token that is stored in local storage.
 */

var axios = require("axios");

export const jwtToken = localStorage.getItem("authorization");

axios.interceptors.request.use(
  function(config) {
    if (jwtToken) {
      config.headers["authorization"] = "Bearer " + jwtToken;
    }
    return config;
  },
  function(err) {
    return Promise.reject(err);
  }
);