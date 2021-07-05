import { useState } from "react";
import Button from "@material-ui/core/Button";
// import { useDispatch } from "react-redux";
// import { login } from "../../../../stores";

import Popup from "./popup";

const LoggedOutNavbar = () => {
    //   const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        // dispatch(login({ username: "abc", email: "abc@def.com", userId: "1234" }));
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [mode, setMode] = useState('signin');
    const handleModeChange = (value: string) => {
        setMode(value || 'signin');
    }
    return (
        <>
            <Button color="inherit" onClick={handleOpen}>
                Login
            </Button>
            <Popup
                open={open}
                handleClose={handleClose.bind(this)}
                mode={mode}
                handleModeChange={handleModeChange.bind(this)}
            />
        </>
    );
};
export default LoggedOutNavbar;
