import Chart from "react-google-charts";
import { useSelector } from "react-redux";
import classes from "./Home.module.css";
import Container from "./UI/Container";
import Loading from "./UI/Loading";

const getMonth = (month) => {
  switch (month) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";
    default:
      return "Jan";
  }
};

const Home = () => {
  const { expenses, totalAmount } = useSelector((state) => state.expenses);

  const data = [["Month", "Amount"]];

  let temp = {};

  expenses.forEach((expense) => {
    if (expense.year === new Date().getFullYear()) {
      if (temp[expense.month]) {
        temp[expense.month] = [
          getMonth(expense.month),
          expense.amount + temp[expense.month][1],
        ];
      } else {
        temp[expense.month] = [getMonth(expense.month), expense.amount];
      }
    }
  });

  for (const year in temp) {
    data.push(temp[year]);
  }

  const options = {
    backgroundColor: "transparent",
    chartArea: {
      height: "80%",
      width: "80%",
    },
    legend: {
      position: "top",
      alignment: "center",
      textStyle: {
        color: "#222222",
      },
    },
    pieHole: 0.25,
    colors: ["#ee5253", "#1dd1a1", "#ff9f43", "#54a0ff", "#feca57"],
    tooltip: {
      text: "value",
    },
    is3D: true,
  };
  return (
    <div className={classes.home}>
      <img src="./images/expenses.jpg" className={classes.img} alt="expenses" />
      <div className={classes.total}>
        <span>All time spending: ₹ {totalAmount}</span>
      </div>
      <div className={classes.chartContainer}>
        <span>Monthly Expenditure</span>
        <div className={classes.chart}>
          <Chart
            chartType="PieChart"
            options={options}
            width="100%"
            height="100%"
            data={data}
            loader={
              <Container height="fit-content">
                <Loading />
              </Container>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
