import { SET_PAGE_DATA } from "../types";

export default (state = {}, action = {}) => {
  if (action.type === SET_PAGE_DATA) {
    const { slug, data } = action.payload;
    return { ...state, [slug]: data };
  }
  return state;
};
