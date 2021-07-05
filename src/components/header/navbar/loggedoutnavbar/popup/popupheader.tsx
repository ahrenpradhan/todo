import DialogTitle from "@material-ui/core/DialogTitle";

interface PopupHeaderInterface {
    mode: string;
}

const PopupHeader = ({ mode }: PopupHeaderInterface) => {
    return (
        <DialogTitle id="responsive-dialog-title">
            {mode === "signin" ? 'Sign In' : 'Sign Up'}
        </DialogTitle>
    );
}

export default PopupHeader;