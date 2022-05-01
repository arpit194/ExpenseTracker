import { Fragment, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { expenseActions } from "../store/expenseSlice";
import { loginActions } from "../store/loginSlice";
import { uiActions } from "../store/uiSlice";
import classes from "./Navbar.module.css";
import User from "./UI/User";

const Navbar = () => {
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const [navOpen, setNavOpen] = useState(false);

  const mobileNav = useRef();
  const menu = useRef();

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(loginActions.logout());
    dispatch(expenseActions.setExpenses());
    dispatch(uiActions.setDisplayName("User"));
    localStorage.removeItem("displayName");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    mobileNav.current.style.left = "100%";
    setNavOpen(false);
    menu.current.style.rotate = "0deg";
  };

  const handleNav = () => {
    if (navOpen) {
      mobileNav.current.style.left = "100%";
      menu.current.style.rotate = "0deg";
      setNavOpen(false);
    } else {
      mobileNav.current.style.left = "0";
      menu.current.style.rotate = "90deg";
      setNavOpen(true);
    }
  };

  return (
    <nav className={classes.navbar}>
      <span className={classes.brand}>Expense Tracker</span>
      <div className={classes.mobileNav} ref={mobileNav}>
        <ul>
          {loggedIn && (
            <Fragment>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName={classes.active}
                  className={classes.navlink}
                  onClick={handleNav}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addExpense"
                  activeClassName={classes.active}
                  className={classes.navlink}
                  onClick={handleNav}
                >
                  Add Expense
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/showExpenses"
                  activeClassName={classes.active}
                  className={classes.navlink}
                  onClick={handleNav}
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
      </div>
      <div className={classes.fullNav}>
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
      </div>
      <div className={classes.menu} onClick={handleNav}>
        <span ref={menu}>☰</span>
      </div>
    </nav>
  );
};

export default Navbar;
