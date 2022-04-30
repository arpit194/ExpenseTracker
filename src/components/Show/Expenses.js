import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import Expense from "./Expense";
import ExpenseChart from "./ExpenseChart";
import classes from "./Expenses.module.css";

const Expenses = () => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dispatch = useDispatch();

  const expenses = useSelector((state) => state.expenses.expenses);
  const { monthFilter: month, yearFilter: year } = useSelector(
    (state) => state.ui
  );

  let temp0 = [];
  expenses.forEach((expense) => {
    if (!temp0.includes(expense.year)) {
      temp0.push(expense.year);
    }
  });

  const temp = [...expenses];
  let total = 0;
  let expenseItems = temp
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .filter((expense) => {
      if (month === -1) {
        if (expense.year === year) {
          total += expense.amount;
          return expense;
        }
      } else {
        if (expense.month === month && expense.year === year) {
          total += expense.amount;
          return expense;
        }
      }
      return null;
    });

  if (!expenseItems[0]) {
    expenseItems = [
      <p className={classes.noData}>No expenses in {monthNames[month]}</p>,
    ];
  }

  const chartItems = temp.filter((expense) => expense.year === year);

  const onMonthSelect = (event) => {
    dispatch(uiActions.setMonth(parseInt(event.target.value)));
  };

  const onYearSelect = (event) => {
    dispatch(uiActions.setYear(parseInt(event.target.value)));
    dispatch(uiActions.setMonth(parseInt(-1)));
  };

  return (
    <div className={classes.expenses}>
      <div className={classes.header}>
        <div className={classes.headerText}>
          <span>Expenses</span>
        </div>
        <div className={classes.filters}>
          <select
            name="month"
            id="month"
            value={month}
            key="month"
            onChange={onMonthSelect}
          >
            <option value="-1">All Months</option>
            <option value="0">January</option>
            <option value="1">February</option>
            <option value="2">March</option>
            <option value="3">April</option>
            <option value="4">May</option>
            <option value="5">June</option>
            <option value="6">July</option>
            <option value="7">August</option>
            <option value="8">September</option>
            <option value="9">October</option>
            <option value="10">November</option>
            <option value="11">December</option>
          </select>
          <select
            name="year"
            id="year"
            key="year"
            value={year}
            onChange={onYearSelect}
          >
            {temp0.sort().map((year, ind) => (
              <option key={ind} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      {<ExpenseChart expenses={chartItems} />}
      {total > 0 && (
        <div className={classes.total}>
          <span>Total: ₹ {total}</span>
        </div>
      )}
      {expenseItems[0].type === "p"
        ? expenseItems[0]
        : expenseItems.map((expense, index) => {
            return <Expense key={index} expense={expense} />;
          })}
    </div>
  );
};

export default Expenses;
