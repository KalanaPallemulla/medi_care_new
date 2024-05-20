import * as types from "./types";

const initialState = {
  isLoading: false,
};

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_CLICK:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      localStorage.setItem("authToken", payload);

      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default loginReducer;
