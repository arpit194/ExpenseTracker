import { useSelector } from "react-redux";
import classes from "./User.module.css";

const User = () => {
  const user = useSelector((state) => state.ui.displayName);
  return (
    <div className={classes.user}>
      <img src="images/profile.png" alt="User" />
      <span>{user}</span>
    </div>
  );
};

export default User;
