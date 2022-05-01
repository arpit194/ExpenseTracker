import { dbURL } from "./variables";
import { expenseActions } from "./expenseSlice";
import { uiActions } from "./uiSlice";

export const fetchExpenses = (userId) => {
  return async (dispatch) => {
    dispatch(uiActions.setIsLoading(true));
    const response = await fetch(dbURL + userId + ".json");

    if (!response.ok) {
      dispatch(
        uiActions.setAlert({ type: "error", message: "Cannot fetch expenses" })
      );
    }
    const expenses = await response.json();
    dispatch(expenseActions.setExpenses(expenses));
    dispatch(uiActions.setIsLoading(false));
  };
};
