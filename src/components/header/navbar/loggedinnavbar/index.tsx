import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { logout } from "../../../../stores";

const LoggedInNavbar = () => {
  const dispatch = useDispatch();
  const handleLoginBtnClick = () => {
    dispatch(logout());
  };
  return (
    <>
      <Button color="inherit" onClick={handleLoginBtnClick}>
        Logout
      </Button>
    </>
  );
};

export default LoggedInNavbar;