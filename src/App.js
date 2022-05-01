import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.module.css";
import Navbar from "./components/Navbar";
import Routes from "./components/Router";
import Alert from "./components/UI/Alert";
import Container from "./components/UI/Container";
import Loading from "./components/UI/Loading";
import { fetchExpenses } from "./store/expenseActions";

function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const userId = useSelector((state) => state.login.userId);

  useEffect(() => {
    if (loggedIn && userId) {
      dispatch(fetchExpenses(userId));
    }
  }, [dispatch, loggedIn, userId]);

  const isLoading = useSelector((state) => state.ui.isLoading);
  const alert = useSelector((state) => state.ui.alert);

  return (
    <Fragment>
      {alert.type && <Alert type={alert.type} message={alert.message} />}
      <Navbar />
      {isLoading ? (
        <Container>
          <Loading />
        </Container>
      ) : (
        <Routes />
      )}
    </Fragment>
  );
}

export default App;
