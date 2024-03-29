import signupReducer from "./Signup/reducer";
import loginReducer from "./Login/reducer";
import adminDashboardReducer from "./AdminDashboard/reducer";
import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import {thunk} from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const rootReducer = combineReducers({
  signupReducer,loginReducer,adminDashboardReducer
});

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export { store };
