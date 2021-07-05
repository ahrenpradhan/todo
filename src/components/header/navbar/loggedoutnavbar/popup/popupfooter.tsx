import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";


interface PopupFooterInterface {
    handleClose: () => void;
    fullScreen: boolean;
    mode: string;
    handleModeChange: (value: string) => void;
}
const PopupFooter = ({ handleClose, fullScreen, mode, handleModeChange }: PopupFooterInterface) => {
    return (
        <DialogActions style={{ flexDirection: 'column' }}>
            {/* <Button onClick={handleClose} color="primary">
                {mode === "signin" ? 'Sign In' : 'Create Account'}
            </Button> */}
            <Button color="secondary" onClick={()=>handleModeChange(mode === "signin" ? 'signup' : 'signin')}>
                {mode === "signin" ? 'Sign Up' : 'Sign In'}
            </Button>
        </DialogActions>
    );
}

export default PopupFooter;