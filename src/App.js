import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.module.css";
import Navbar from "./components/Navbar";
import Routes from "./components/Router";
import Container from "./components/UI/Container";
import Loading from "./components/UI/Loading";
import { fetchExpenses } from "./store/expenseActions";

function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const userId = useSelector((state) => state.login.userId);

  useEffect(() => {
    if (loggedIn && userId) {
      alert("fetching data");
      dispatch(fetchExpenses(userId));
    }
  }, [dispatch, loggedIn, userId]);

  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <Fragment>
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
