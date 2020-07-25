import { SET_LOADING } from "../types";

export default (state = false, action = {}) => {
  if (action.type === SET_LOADING) {
    return action.payload || false;
  }
  return state;
};
