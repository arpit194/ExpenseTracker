import classes from "./Login.module.css";
import Button from "../UI/Button";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/loginActions";

const Login = () => {
  const dispatch = useDispatch();

  const email = useRef();
  const password = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const userEmail = email.current.value;
    const userPass = password.current.value;
    dispatch(login(userEmail, userPass));
  };

  const resetForm = () => {
    email.current.value = "";
    password.current.value = "";
  };

  return (
    <div className={classes.login}>
      <form
        className={classes.form}
        autoComplete="off"
        onSubmit={submitHandler}
      >
        <div className={classes.formName}>
          <span>Login</span>
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
            Login
          </Button>
          <Button color="grey" onClick={resetForm} type="button">
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
