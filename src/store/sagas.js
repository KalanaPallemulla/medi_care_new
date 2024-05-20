// sagas/index.js
import { all, fork } from "redux-saga/effects";
import registerSaga from "../client/components/register/redux/saga";
import loginSage from "../client/components/login/redux/saga";
import profileSaga from "../client/components/patients/redux/saga";
// Combine your sagas here
export default function* rootSaga() {
  yield all([fork(registerSaga), fork(loginSage), fork(profileSaga)]);
}
