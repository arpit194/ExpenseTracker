import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <img
      src="./images/loading.png"
      className={classes.loading}
      alt="Loading..."
    />
  );
};

export default Loading;
