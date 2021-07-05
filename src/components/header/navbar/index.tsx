import { useSelector } from "react-redux";
import { RootState } from "../../../stores";
import LoggedInNavbar from "./loggedinnavbar";
import LoggedOutNavbar from "./loggedoutnavbar";

const NavBar = () => {
  const userStore = useSelector((state: RootState) => state.userStore);
  return userStore?.loggedIn ? <LoggedInNavbar /> : <LoggedOutNavbar />;
};

export default NavBar;
