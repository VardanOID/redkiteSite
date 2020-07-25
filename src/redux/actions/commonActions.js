import * as types from "../types";

const setPageData = (slug, data) => {
  return (dispatch) =>
    dispatch({
      type: types.SET_PAGE_DATA,
      payload: { slug, data },
    });
};

const setLoading = (isLoading) => {
  return (dispatch) =>
    dispatch({
      type: types.SET_LOADING,
      payload: isLoading,
    });
};

export { setPageData, setLoading };
