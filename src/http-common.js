import axios from "axios";

// set baseurl of API
export default axios.create({
  baseURL: "https://project2-node-js-site-rest-api.onrender.com/api",
  headers: {
    "Content-type": "application/json"
  }
});