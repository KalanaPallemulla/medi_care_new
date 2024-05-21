import * as types from "./types";

export const registerClickAction = (payload) => {
  return {
    type: types.REGISTER_CLICK,
    payload,
  };
};

export const registerSuccessAction = (payload) => {
  return {
    type: types.REGISTER_SUCCESS,
    payload,
  };
};
