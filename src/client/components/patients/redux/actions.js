import * as types from "./types";

export const getProfileAction = () => {
  return {
    type: types.GET_PROFILE_DATA,
  };
};

export const getProfileSuccessAction = (payload) => {
  return {
    type: types.GET_PROFILE_DATA_SUCCESS,
    payload,
  };
};

export const getProfileFailAction = () => {
  return {
    type: types.GET_PROFILE_DATA_FAIL,
  };
};

export const updateProfileDataAction = (payload) => {
  return {
    type: types.UPDATE_PROFILE_DATA,
    payload,
  };
};

export const updateProfileDataSuccessAction = (payload) => {
  return {
    type: types.UPDATE_PROFILE_DATA_SUCCESS,
    payload,
  };
};

export const updateProfileDataFailAction = (payload) => {
  return {
    type: types.UPDATE_PROFILE_DATA_FAIL,
  };
};
