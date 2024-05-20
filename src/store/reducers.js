import { combineReducers } from "redux";
import registerReducer from "../client/components/register/redux/reducer"; // Import your reducers
import loginReducer from "../client/components/login/redux/reducer";
import profileReducer from "../client/components/patients/redux/reducer";
const rootReducer = combineReducers({
  registerReducer,
  loginReducer,
  profileReducer,
});

export default rootReducer;
