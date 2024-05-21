import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import * as types from "./types";
import {
  getProfileDataRequest,
  updateProfileDataRequest,
} from "../../../../api/apiCalls";
import {
  getProfileFailAction,
  getProfileSuccessAction,
  updateProfileDataFailAction,
  updateProfileDataSuccessAction,
} from "./actions";
import { toast } from "react-toastify";

function* getProfileDataHandler(payload) {
  try {
    const res = yield call(getProfileDataRequest);
    if (res) {
      yield put(getProfileSuccessAction(res));
    }
  } catch (error) {
    yield put(getProfileFailAction());
  }
}

function* updateProfileDataHandler({ payload }) {
  console.log(payload);
  try {
    const res = yield call(updateProfileDataRequest, payload);
    console.log(res);
    if (res) {
      yield put(updateProfileDataSuccessAction(res));
      toast.success("Profile updated", {
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
  } catch (error) {
    console.log(error);
    yield put(updateProfileDataFailAction());
  }
}

function* getProfileDataListner() {
  yield takeLatest(types.GET_PROFILE_DATA, getProfileDataHandler);
}

function* updateProfileDataListner() {
  yield takeLatest(types.UPDATE_PROFILE_DATA, updateProfileDataHandler);
}

export default function* watch() {
  yield all([fork(getProfileDataListner), fork(updateProfileDataListner)]);
}
