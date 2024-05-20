import axios from "axios";
import doRequest from ".";

export const registerRequest = async (data) => {
  const response = await doRequest("auth/register", "POST", data);
  return response;
};

export const loginRequest = async (data) => {
  const response = await doRequest("auth/login", "POST", data);
  return response;
};

export const getProfileDataRequest = async () => {
  const userId = localStorage.getItem("userId");
  const response = await doRequest(`profile/${userId}`);
  return response;
};

export const updateProfileDataRequest = async (payload) => {
  const userId = localStorage.getItem("userId");
  const response = await doRequest(`profile/${userId}`, "PATCH", payload);
  return response;
};
