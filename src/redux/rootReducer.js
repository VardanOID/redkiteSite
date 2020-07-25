import { combineReducers } from "redux";

import pageDataReducer from "./reducers/pageDataReducer";
import loadingReducer from "./reducers/loadingReducer";

const rootReducer = combineReducers({
  pageData: pageDataReducer,
  loading: loadingReducer,
});

export default rootReducer;
