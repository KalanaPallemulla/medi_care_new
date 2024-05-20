import * as types from "./types";

const initialState = {
  user: null,
  isLoading: false,
};

const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REGISTER_CLICK:
      return {
        ...state,
        isLoading: true,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        user: payload.user,
        isLoading: false,
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        user: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default registerReducer;
