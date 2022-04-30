import { expenseActions } from "./expenseSlice";
import { uiActions } from "./uiSlice";

export const fetchExpenses = (userId) => {
  return async (dispatch) => {
    dispatch(uiActions.setIsLoading(true));
    const response = await fetch(
      "https://expensetracker-9695c-default-rtdb.firebaseio.com/" +
        userId +
        ".json"
    );

    if (!response.ok) {
    }
    const expenses = await response.json();
    dispatch(expenseActions.setExpenses(expenses));
    dispatch(uiActions.setIsLoading(false));
  };
};
