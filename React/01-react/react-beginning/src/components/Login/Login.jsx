import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../MultiComponents/FormsControl/FormsControl';
import { valueValidator } from '../Utils/Validators/validators';

// const maxLengthValidator10 = maxLengthValidator(10)

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field component={Input} name={"login"} validate={[valueValidator]} placeholder={"Login"} /></div>
                <div><Field component={Input} name={"password"} validate={[valueValidator]} placeholder={"Password"} /></div>
                <div><Field component={"input"} name={"rememberMe"} type="checkbox" />Remember Me</div>
                <div><button>Login</button></div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login