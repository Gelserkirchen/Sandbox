import React from 'react'
import {connect} from 'react-redux';
import {authAction} from './../../redux/reducers/auth_Reducer'
import Header from './Header'
import { usersAPI } from '../../api/api';


class HeaderContainer extends React.Component {
    componentDidMount() {
      
      usersAPI.authOnServer().then(response => {
        // debugger
        let {id, login, email} = response.data
        this.props.authAction(id, email, login)
      })
    }

    render() {
      return <Header {...this.props.data.auth}/>
    }
}

let mapStateToProps = (data) => {
  return {
    data: data
  }
}

export default connect(mapStateToProps, {
    authAction
})(HeaderContainer)