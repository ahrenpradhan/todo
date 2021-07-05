import React from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import { compose } from 'redux';
import { TextField, Button } from '@material-ui/core';


const renderTextField = ({
    label,
    placeholder,
    input,
    meta: { touched, invalid, error },
    ...custom
}: any) => (
    <TextField
        fullWidth
        variant="outlined"
        label={label}
        placeholder={placeholder}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
)

const validate = (values: any) => {
    const errors: any = {}
    const requiredFields = [
        'firstName',
        'lastName',
        'email',
        'favoriteColor',
        'notes'
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }
    return errors
}

export interface SignUpFormProps extends InjectedFormProps { }

let SignUpForm: React.FC<SignUpFormProps> = ({ handleSubmit, pristine, submitting, reset }) => {

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ margin: '0 0.5em' }}>
                <div style={{ display: 'flex', margin: '1em 0' }}>
                    <Field name="firstName" component={renderTextField} label="First Name" type="text" placeholder='ABC' />
                    <div style={{ width: '2em' }} />
                    <Field name="lastName" component={renderTextField} label="Last Name" type="text" placeholder='DEF' />
                </div>
                <div style={{ margin: '1em 0' }}>
                    <Field name="email" component={renderTextField} label="Email" type="email" placeholder='abcdef@ghi.com' />
                </div>
                <div style={{ margin: '1em 0' }}>
                    <Field name="password" component={renderTextField} label="Create Password" type="password" />
                </div>
                <div style={{ margin: '1em 0' }}>
                    <Field name="password" component={renderTextField} label="Re-type Password" type="password" />
                </div>
                <div style={{ margin: '1em 0' }}>
                    <Button disabled={pristine || submitting} type="submit" color="primary">
                        Sign Up
                    </Button>
                </div>
                {/* <div>
                    <Button type="button" disabled={pristine || submitting} onClick={reset} color="secondary">
                        Clear Values
                    </Button>
                </div> */}
            </div>
        </form>
    );
}

export default compose(reduxForm({
    // a unique name for the form
    form: 'signinform',
    validate,
}))(SignUpForm as any);