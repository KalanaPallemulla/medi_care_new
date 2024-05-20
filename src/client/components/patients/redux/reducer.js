import * as types from "./types";

const initialState = {
  profileData: {},
  isLoading: false,
};

const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_PROFILE_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_PROFILE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profileData: payload,
        isLoading: false,
      };
    case types.GET_PROFILE_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        profileData: {},
      };
    case types.UPDATE_PROFILE_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.UPDATE_PROFILE_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        profileData: payload,
      };
    }
    case types.UPDATE_PROFILE_DATA_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default profileReducer;
