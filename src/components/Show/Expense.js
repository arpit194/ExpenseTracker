import classes from "./Expense.module.css";

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

const Expense = (props) => {
  const d = new Date(props.expense.date);
  const date =
    d.getDate() + " " + monthNames[d.getMonth()] + " " + d.getFullYear();
  return (
    <div className={classes.expense} key={props.id}>
      <div className={classes.detailsContainer}>
        <div className={classes.details}>
          <span className={classes.date}>{date}</span>
          <div className={classes.expenseType}>
            <span>{props.expense.type}</span>
          </div>
        </div>
        <div className={classes.description}>{props.expense.description}</div>
      </div>
      <div className={classes.priceContainer}>
        <span>₹ {props.expense.amount}</span>
      </div>
    </div>
  );
};

export default Expense;
