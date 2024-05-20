import { all, call, fork, takeLatest } from "redux-saga/effects";
import * as types from "./types";
import { registerRequest } from "../../../../api/apiCalls";
import { toast } from "react-toastify";
function* registerRequestHandler({ payload }) {
  const { data, callback } = payload;
  const res = yield call(registerRequest, data);
  if (res.statusCode === 201) {
    toast.success("Please login in now", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    callback();
  } else {
    if (Array.isArray(res.response.data.message)) {
      res.response.data.message.map((msg) => {
        toast.error(msg, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    } else {
      toast.error(res.response.data.message, {
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
}

function* registerRequestListner() {
  yield takeLatest(types.REGISTER_CLICK, registerRequestHandler);
}

export default function* watch() {
  yield all([fork(registerRequestListner)]);
}
