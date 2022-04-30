import classes from "./ExpenseChart.module.css";
import ExpenseChartItem from "./ExpenseChartItem";

const getMonth = (month) => {
  switch (month) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";
    default:
      return "Jan";
  }
};

const ExpenseChart = (props) => {
  const totalAmount = props.expenses.reduce((total, value) => {
    return total + value.amount;
  }, 0);

  const temp = {
    0: { month: "Jan", amount: 0 },
    1: { month: "Feb", amount: 0 },
    2: { month: "Mar", amount: 0 },
    3: { month: "Apr", amount: 0 },
    4: { month: "May", amount: 0 },
    5: { month: "Jun", amount: 0 },
    6: { month: "Jul", amount: 0 },
    7: { month: "Aug", amount: 0 },
    8: { month: "Sep", amount: 0 },
    9: { month: "Oct", amount: 0 },
    10: { month: "Nov", amount: 0 },
    11: { month: "Dec", amount: 0 },
  };
  const data = [];
  props.expenses.forEach((expense) => {
    temp[expense.month] = {
      month: getMonth(expense.month),
      amount: expense.amount + temp[expense.month].amount,
    };
  });

  for (const month in temp) {
    data.push(temp[month]);
  }

  return (
    <div className={classes.expenseChart}>
      {data.map((expense, ind) => {
        return (
          <ExpenseChartItem
            height={Math.floor((expense.amount / totalAmount) * 100)}
            amount={expense.amount}
            month={expense.month}
            key={ind}
          />
        );
      })}
    </div>
  );
};

export default ExpenseChart;
