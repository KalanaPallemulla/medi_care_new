import * as types from "./types";

export const registerClickAction = (payload) => {
  return {
    type: types.REGISTER_CLICK,
    payload,
  };
};
