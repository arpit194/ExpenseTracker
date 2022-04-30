import classes from "./Signup.module.css";
import Button from "../UI/Button";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/loginActions";

const Signup = () => {
  const dispatch = useDispatch();

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const userName = name.current.value;
    const userEmail = email.current.value;
    const userPass = password.current.value;
    dispatch(signUp(userName, userEmail, userPass));
  };

  const resetForm = () => {
    name.current.value = "";
    email.current.value = "";
    password.current.value = "";
  };

  return (
    <div className={classes.signup}>
      <form
        className={classes.form}
        autoComplete="off"
        onSubmit={submitHandler}
      >
        <div className={classes.formName}>
          <span>Signup</span>
        </div>
        <div className={classes.formControl}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            ref={name}
          />
        </div>
        <div className={classes.formControl}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your Email Id"
            required
            ref={email}
          />
        </div>
        <div className={classes.formControl}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            ref={password}
          />
        </div>
        <div className={classes.formActions}>
          <Button color="purple" type="submit">
            Signup
          </Button>
          <Button color="grey" onClick={resetForm} type="button">
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
