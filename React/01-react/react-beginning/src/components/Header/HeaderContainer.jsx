import React from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import {authAction} from './../../redux/reducers/auth_Reducer'
import Header from './Header'


class HeaderContainer extends React.Component {
    componentDidMount() {
      
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, 
        {withCredentials: true}
      ).then(response => {
        // debugger
        let {id, login, email} = response.data.data
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