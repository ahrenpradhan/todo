import Dialog from "@material-ui/core/Dialog";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import PopupHeader from './popupheader';
import PopupContent from './popupcontent';
import PopupFooter from './popupfooter';


interface PopupInterface {
    open: boolean;
    handleClose: () => void;
    mode: string;
    handleModeChange: (value: string) => void;
}

const Popup = ({ open, handleClose, mode, handleModeChange }: PopupInterface) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
    return (
        <Dialog
            // fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <PopupHeader mode={mode} />
            <PopupContent mode={mode}/>
            <PopupFooter handleClose={handleClose} fullScreen={fullScreen} mode={mode} handleModeChange={handleModeChange}/>
        </Dialog>
    );
};

export default Popup;
