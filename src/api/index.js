import axios from "axios";

// const axiosRetry = require("axios-retry");
const BASE_URL = "http://localhost:4001/";

export default async function doRequest(
  url,
  method = "GET",
  data = null,
  contentType = "application/json"
) {
  const maxRetries = 3;
  const token = localStorage.getItem("authToken");

  const options = {
    method,
    url,
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
      "Content-Type": contentType,
      Authorization: `Bearer ${token}`,
    },
  };
  if (data) {
    options.data = data;
  }

  const sendRequestWithRetry = async (retryCount) => {
    try {
      const response = await axios(options);
      return response.data;
    } catch (error) {
      console.log("response.response.status", error.response.status);

      if (retryCount > 0) {
        console.log(
          `Request failed. Retrying... (Attempts left: ${retryCount})`
        );
        if (
          error.response.status === 401 &&
          url !== "auth/login" &&
          url !== "auth/register"
        ) {
          //how to log out?
          localStorage.removeItem("userId");
          window.location.href = "/login";
          return;
        }
        return sendRequestWithRetry(retryCount - 1);
      } else {
        console.log(error);
        return error;
      }
    }
  };

  return sendRequestWithRetry(maxRetries);
}
