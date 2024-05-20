import { loginRequest } from "../../../../api/apiCalls";
import * as types from "./types";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { loginSuccessAction } from "./actions";
import { jwtDecode } from "jwt-decode";

function* loginHandler(payload) {
  const { data, callback } = payload.payload;
  console.log(payload);
  const res = yield call(loginRequest, data);
  if (res.accessToken) {
    const user = jwtDecode(res.accessToken);
    console.log("user", user);
    localStorage.setItem("userId", user.profile._id);
    yield put(loginSuccessAction(res.accessToken));
    callback();
  } else if (res.response.status === 400) {
    console.log("no");
    toast.error("Please check credentials", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else if (res.response.status === 401) {
    toast.error("Invalid credentials", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
}

function* loginListner() {
  yield takeLatest(types.LOGIN_CLICK, loginHandler);
}

export default function* watch() {
  yield all([fork(loginListner)]);
}
