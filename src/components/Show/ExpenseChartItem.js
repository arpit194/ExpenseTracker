import classes from "./ExpenseChartItem.module.css";

const ExpenseChartItem = (props) => {
  return (
    <div className={classes.expenseChartItem}>
      <div className={classes.barContainer}>
        <div className={classes.barBackground}></div>
        <div
          className={classes.barFill}
          style={{ height: props.height + "%" }}
          title={"₹ " + props.amount}
        ></div>
      </div>
      <div className={classes.month}>{props.month}</div>
    </div>
  );
};

export default ExpenseChartItem;
