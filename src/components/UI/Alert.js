import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import classes from "./Alert.module.css";

const Alert = (props) => {
  const dispatch = useDispatch();

  const hideAlert = useCallback(() => {
    dispatch(uiActions.setAlert({ type: null, message: null }));
  }, [dispatch]);

  useEffect(() => {
    setTimeout(hideAlert, 5000);
  }, [hideAlert]);

  return (
    <div className={`${classes.alert} ${classes[props.type]}`}>
      <span>{props.message}</span>
      <div onClick={hideAlert}>X</div>
    </div>
  );
};

export default Alert;
