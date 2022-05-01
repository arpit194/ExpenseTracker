import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <img
      src="ExpenseTracker/images/loading.png"
      className={classes.loading}
      alt="Loading..."
    />
  );
};

export default Loading;
