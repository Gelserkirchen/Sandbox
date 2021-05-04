import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {isIamLoggedIn} from '../../redux/reducers/auth_Reducer'

let mapStateToProps = (state) => {
    // isIamLoggedIn()
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirectComponent = (Component) => {
    class RedirectComponent extends React.Component {
        render () {
            // debugger
            isIamLoggedIn()
            if (!this.props.isAuth) return <Redirect to={"/Login"}/> 
            return <Component {...this.props}/>
        }
    }

    const ConnectedAuthRedirectedComponent = connect(mapStateToProps, {})(RedirectComponent) 

    return ConnectedAuthRedirectedComponent
}


