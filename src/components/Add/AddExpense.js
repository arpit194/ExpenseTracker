import classes from "./AddExpense.module.css";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../store/formSlice";
import { expenseActions } from "../../store/expenseSlice";
import { useHistory } from "react-router-dom";

const AddExpense = () => {
  const disptach = useDispatch();
  const history = useHistory();

  const expense = useSelector((state) => state.expense);
  const userId = useSelector((state) => state.login.userId);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const errors = validateInputs(expense);
    if (errors.length === 0) {
      disptach(expenseActions.addExpense({ expense, userId }));
      disptach(formActions.resetForm());
      history.push("/showExpenses");
    } else {
      console.log(errors);
    }
  };

  const validateInputs = (expense) => {
    let errors = [];
    if (expense.type === null) {
      errors.push("Please select a type");
    }
    if (expense.date === null) {
      errors.push("Please select a date");
    }
    if (expense.amount <= 0) {
      errors.push("Amount should be more than 0");
    }
    if (expense.description === null) {
      errors.push("Please enter a description");
    }
    return errors;
  };

  const onChangeHandler = (event) => {
    switch (event.target.name) {
      case "type": {
        disptach(formActions.setType(event.target.value));
        return;
      }
      case "date": {
        disptach(formActions.setDate(event.target.value));
        return;
      }
      case "amount": {
        disptach(formActions.setAmount(parseInt(event.target.value)));
        return;
      }
      case "desc": {
        disptach(formActions.setDesc(event.target.value));
        return;
      }
      default: {
        return;
      }
    }
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.formName}>
        <span>Add Expenses</span>
      </div>
      <div className={classes.formControl}>
        <label htmlFor="type">Expense Type</label>
        <select
          name="type"
          id="type"
          onChange={onChangeHandler}
          value={expense.type}
        >
          <option value="Car/Bike">Car/Bike</option>
          <option value="Travel">Travel</option>
          <option value="Food Order">Food Order</option>
          <option value="Groceries">Groceries</option>
          <option value="Bills">Bills</option>
          <option value="Recharge">Recharge</option>
          <option value="House/Rent">House/Rent</option>
          <option value="Clothes and Hygene">Clothes and Hygene</option>
          <option value="Subscription">Subscription</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className={classes.formControl}>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="type"
          onChange={onChangeHandler}
          required
          value={expense.date}
        />
      </div>
      <div className={classes.formControl}>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="0"
          onChange={onChangeHandler}
          required
          value={expense.amount}
        />
      </div>
      <div className={classes.formControl}>
        <label htmlFor="desc">Description</label>
        <textarea
          name="desc"
          id="desc"
          rows="2"
          onChange={onChangeHandler}
          required
          value={expense.description}
        ></textarea>
      </div>
      <div className={classes.formActions}>
        <Button color="purple" type="submit">
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddExpense;
