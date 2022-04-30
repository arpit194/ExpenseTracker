import classes from "./Container.module.css";

const Container = (props) => {
  return (
    <div style={{ height: props.height }} className={classes.container}>
      {props.children}
    </div>
  );
};

export default Container;
