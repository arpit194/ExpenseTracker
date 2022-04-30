import { Route, Switch } from "react-router-dom";
import AddExpense from "./Add/AddExpense";
import Home from "./Home";
import Expenses from "./Show/Expenses";
import Container from "./UI/Container";
import Signup from "./User/Signup";
import Login from "./User/Login";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Routes = () => {
  const loggedIn = useSelector((state) => state.login.loggedIn);

  return (
    <Switch>
      {loggedIn && (
        <Fragment>
          <Route path="/" exact>
            <Container>
              <Home />
            </Container>
          </Route>
          <Route path="/addExpense">
            <Container>
              <AddExpense />
            </Container>
          </Route>
          <Route path="/showExpenses">
            <Container>
              <Expenses />
            </Container>
          </Route>
          <Route path="/login">
            <Redirect to="/" />
          </Route>
        </Fragment>
      )}
      {!loggedIn && (
        <Fragment>
          <Route path="/signup">
            <Container>
              <Signup />
            </Container>
          </Route>
          <Route path="/login">
            <Container>
              <Login />
            </Container>
          </Route>
          <Route path="/">
            <Container>
              <Redirect to="/login" />
            </Container>
          </Route>
        </Fragment>
      )}
    </Switch>
  );
};

export default Routes;
