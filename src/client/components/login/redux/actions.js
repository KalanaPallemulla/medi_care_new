import * as types from "./types";

export const loginAction = (payload) => {
  return {
    type: types.LOGIN_CLICK,
    payload,
  };
};

export const loginSuccessAction = (payload) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
};
