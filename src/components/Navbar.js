import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { expenseActions } from "../store/expenseSlice";
import { loginActions } from "../store/loginSlice";
import { uiActions } from "../store/uiSlice";
import classes from "./Navbar.module.css";
import User from "./UI/User";

const Navbar = () => {
  const loggedIn = useSelector((state) => state.login.loggedIn);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(loginActions.logout());
    dispatch(expenseActions.setExpenses());
    dispatch(uiActions.setDisplayName("User"));
    localStorage.removeItem("displayName");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };
  return (
    <nav className={classes.navbar}>
      <span className={classes.brand}>Expense Tracker</span>
      <ul>
        {loggedIn && (
          <Fragment>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName={classes.active}
                className={classes.navlink}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addExpense"
                activeClassName={classes.active}
                className={classes.navlink}
              >
                Add Expense
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/showExpenses"
                activeClassName={classes.active}
                className={classes.navlink}
              >
                View Expenses
              </NavLink>
            </li>
            <li>
              <div onClick={logoutHandler} className={classes.logout}>
                Logout
              </div>
            </li>
          </Fragment>
        )}
        {!loggedIn && (
          <Fragment>
            <li>
              <NavLink
                to="/login"
                exact
                activeClassName={classes.active}
                className={classes.navlink}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                activeClassName={classes.active}
                className={classes.navlink}
              >
                Signup
              </NavLink>
            </li>
          </Fragment>
        )}
        <li>
          <div>
            <User />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
