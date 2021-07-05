import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";

import SignInForm from './signupform';

interface PopupContentInterface {
    mode: string;
}

const PopupContent = ({ mode }: PopupContentInterface) => {
    return (
        <DialogContent>
            {/* <DialogContentText>
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
            </DialogContentText> */}
            {mode === 'signin'
                ? <SignInForm onSubmit={(values: any) => console.log(values)} />
                : 'this is random'}
        </DialogContent>
    );
}

export default PopupContent;