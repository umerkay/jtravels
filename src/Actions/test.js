export const setTestValue = (dispatch, value) => {
  dispatch({ type: "SET_TEST_VALUE", payload: { value } });
};
