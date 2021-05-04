import React from 'react'
import {connect} from 'react-redux';
import {authAction} from './../../redux/reducers/auth_Reducer'
import Header from './Header'
import { isIamLoggedIn } from '../../redux/reducers/auth_Reducer';



class HeaderContainer extends React.Component {
    componentDidMount() {
      this.props.isIamLoggedIn()
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
    // authAction,
    isIamLoggedIn
})(HeaderContainer)